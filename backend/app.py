from fastapi import FastAPI, File, UploadFile, HTTPException, Form
from fastapi.responses import JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import tempfile
import pyttsx3
from pydub import AudioSegment
from moviepy.editor import VideoFileClip
from groq import Groq
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Initialize TTS engine
engine = pyttsx3.init()

# Check for required environment variables
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
print(GROQ_API_KEY)
if not GROQ_API_KEY:
    raise RuntimeError("❌ Missing required GROQ_API_KEY.")

# Initialize Groq client
client = Groq(api_key=GROQ_API_KEY)

# Extract audio from video
def extract_audio_from_video(video_path):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as temp_audio_file:
        with VideoFileClip(video_path) as video:
            video.audio.write_audiofile(temp_audio_file.name, codec="mp3")
        return temp_audio_file.name

# Transcribe audio
def transcribe_audio(audio_path):
    with open(audio_path, "rb") as file:
        transcription = client.audio.transcriptions.create(
            file=(os.path.basename(audio_path), file.read()),
            model="whisper-large-v3",
            response_format="json",
            language="en",
            temperature=0.0,
        )
    return transcription.text

# Text-to-audio conversion
def text_to_audio_file(text, filename):
    engine.setProperty('rate', 150)
    engine.setProperty('volume', 1)
    engine.save_to_file(text, filename)
    engine.runAndWait()
    return filename

# Custom Groq-based question-answering function
def groq_question_answer(question, context):
    try:
        messages = [
            {"role": "system", "content": "You are a helpful assistant. Answer the user's question based on the provided context."},
            {"role": "user", "content": f"Context:\n{context}\n\nQuestion:\n{question}"}
        ]
        response = client.chat.completions.create(
            messages=messages,
            model="llama3-8b-8192",
            temperature=0.5,
            max_tokens=150
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        raise RuntimeError(f"Error in fetching answer: {str(e)}")

@app.post("/transcribe/")
async def transcribe(file: UploadFile = File(...)):
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix="." + file.filename.split(".")[-1]) as temp_file:
            temp_file.write(await file.read())
            temp_file_path = temp_file.name

        if file.content_type.startswith("video"):
            audio_path = extract_audio_from_video(temp_file_path)
            os.unlink(temp_file_path)
            temp_file_path = audio_path

        transcription = transcribe_audio(temp_file_path)
        os.unlink(temp_file_path)

        return JSONResponse({"transcription": transcription})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/summarize/")
async def summarize(transcription: str = Form(...)):
    try:
        response = client.chat.completions.create(
            messages=[
                {"role": "system", "content": "You are a helpful assistant that summarizes text."},
                {"role": "user", "content": f"Please summarize the following transcription:\n\n{transcription}"}
            ],
            model="llama-3.2-90b-text-preview",
            temperature=0.5,
        )
        summary = response.choices[0].message.content
        return JSONResponse({"summary": summary})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/convert-audio/")
async def convert_audio(summary: str = Form(...)):
    try:
        audio_path = "summary_audio.wav"
        audio_path = text_to_audio_file(summary, audio_path)
        return FileResponse(audio_path, media_type="audio/wav", filename="summary_audio.wav")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/question/")
async def ask_question(question: str = Form(...), context: str = Form(...)):
    try:
        answer = groq_question_answer(question, context)
        return JSONResponse({"answer": answer})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
