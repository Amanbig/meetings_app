"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import axios from "axios";
import { UploadCard } from "@/components/parts/FileUpload";
import { motion } from "framer-motion"; // Import Framer Motion
import { ArrowRight, Loader } from "lucide-react";
import endpoint from "../../../urls";

export default function Page() {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState("");
  const [summary, setSummary] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  const handleTranscribe = async () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${endpoint}/transcribe`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTranscription(response.data.transcription);
    } catch (error) {
      console.error("Error transcribing file:", error);
      alert("Error during transcription.");
    } finally {
      setLoading(false);
    }
  };

  const handleSummarize = async () => {
    if (!transcription) {
      alert("No transcription available for summarization.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("transcription", transcription);

      const response = await axios.post(`${endpoint}/summarize`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error summarizing transcription:", error);
      alert("Error during summarization.");
    } finally {
      setLoading(false);
    }
  };

  const handleAskQuestion = async () => {
    if (!question || !summary) {
      alert("Provide a question and ensure there is a summary.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("question", question);
      formData.append("context", summary);

      const response = await axios.post(`${endpoint}/question`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error fetching answer:", error);
      alert("Error during question answering.");
    } finally {
      setLoading(false);
    }
  };

  const handleConvertAudio = async () => {
    if (!summary) {
      alert("No summary available to convert to audio.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("summary", summary);

      const response = await axios.post(`${endpoint}/convert-audio/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob",
      });

      const audioBlob = response.data;
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error("Error converting to audio:", error);
      alert("Error during audio conversion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 p-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <UploadCard setFile={setFile} />
      </motion.div>

      {transcription && (
        <motion.div
          className="mt-6 dark:border-white border-black border-2 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Transcription</CardTitle>
            </CardHeader>
            <CardContent className="h-64 overflow-y-auto">
              <p className="whitespace-pre-wrap">{transcription}</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={handleSummarize} disabled={loading} className="p-4">
                {loading ? "Summarizing..." : "Summarize"}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}

      {summary && (
        <motion.div
          className="mt-6 dark:border-white border-black border-2 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="h-64 overflow-y-auto">
              <p className="whitespace-pre-wrap">{summary}</p>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="flex flex-row justify-center text-center gap-4 w-full">
                <Input
                  type="text"
                  placeholder="Ask a question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="p-2 dark:border-white border-black border-2 rounded-sm"
                />
                <Button
                  className="p-2 rounded-xl"
                  onClick={handleAskQuestion}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader size="sm" /> // Use Next.js loader here when loading is true
                  ) : (
                    <ArrowRight className="w-5 h-5" /> // Use ArrowRight from react-icons when loading is false
                  )}
                </Button>
              </div>
              <div className="p-4">
            {answer && (
                  <motion.p
                    className="mt-4 text-lg font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Answer: {answer}
                  </motion.p>
                )}
            </div>
            </CardFooter>
          </Card>
        </motion.div>
      )}

      {audioUrl && (
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <audio controls src={audioUrl} />
        </motion.div>
      )}

      {!transcription && (
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Button onClick={handleTranscribe} disabled={loading}>
            {loading ? "Transcribing..." : "Transcribe"}
          </Button>
        </motion.div>
      )}

      {summary && (
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Button onClick={handleConvertAudio} disabled={loading}>
            {loading ? "Converting to Audio..." : "Convert Summary to Audio"}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
