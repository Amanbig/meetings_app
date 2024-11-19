"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion"; // Import motion from framer-motion

export function UploadCard({ setFile }) {
  const [fileName, setFileName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile); // Update the file in the parent component
      setFileName(selectedFile.name);
      setUploadStatus(""); // Reset upload status
    }
  };

  return (
    <Card className="w-full dark:border-2 dark:border-white border-black border-4">
      <CardHeader>
        <CardTitle>Upload Audio or Video Files</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="file">Upload File</Label>
              <Input
                id="file"
                type="file"
                onChange={handleFileChange}
                accept=".wav,.mp3,.mp4"
              />
              {fileName && (
                <motion.p
                  className="mt-2 text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {fileName}
                </motion.p>
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        {uploadStatus && (
          <motion.p
            className="mt-2 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {uploadStatus}
          </motion.p>
        )}
      </CardFooter>
    </Card>
  );
}
