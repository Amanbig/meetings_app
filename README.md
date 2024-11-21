# Meetings Summarizer

This project is a Meetings Summarizer built with **FastAPI** on the backend and a **React** frontend. It allows users to upload video or audio files, transcribe content, summarize it, ask contextual questions, and convert summaries to audio.

## Features

### Backend (FastAPI)
- **Transcription**: Extract audio from video files and transcribe it using the Groq Whisper model.
- **Summarization**: Summarize the transcription with an AI model.
- **Question Answering**: Ask contextual questions based on the transcription or summary.
- **Text-to-Speech**: Convert text summaries into audio files.
- **CORS Support**: Full support for cross-origin requests.

### Frontend (React)
- **File Upload**: Upload videos or audio files directly from the browser.
- **Real-time Updates**: Display transcriptions, summaries, and answers dynamically.
- **Audio Playback**: Listen to AI-generated audio summaries.
- **Responsive UI**: Styled with modern UI components and animations.

## Tech Stack

### Backend
- **FastAPI**: For building RESTful APIs.
- **Groq API**: For transcription and AI processing.
- **Pyttsx3**: For text-to-speech.
- **MoviePy**: For extracting audio from video.
- **Pydub**: For audio processing.
- **dotenv**: For environment variable management.

### Frontend
- **React**: For building the user interface.
- **Framer Motion**: For animations.
- **Axios**: For API requests.
- **ShadCN Components**: For styling UI components.
- **Lucide React Icons**: For modern SVG icons.

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/Amanbig/meetings_app.git
   ```

2. Run Frontend:
    ```bash
    npm run dev
    ```

3. Create a virtual environment and activate it:
    ```bash
    cd meetings_app/backend
    python -m venv venv
    source venv/bin/activate   # On Windows: venv\Scripts\activate
    ```

4. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

5. Set up environment variables: Create a .env file and add your Groq API key:
    ```
    GROQ_API_KEY=<your-groq-api-key>
    ```

6. Run the backend
    ```bash
    fastapi dev app.py
    ```

## Contributing

1. **Fork the repository** on GitHub.
2. **Create a new branch** (`git checkout -b feature/YourFeature`).
3. **Make your changes** and commit (`git commit -am 'Add new feature'`).
4. **Push to the branch** (`git push origin feature/YourFeature`).
5. **Create a new Pull Request for the changes made**.