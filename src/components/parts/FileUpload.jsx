"use client"

import React, {useState} from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function UploadCard() {
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState("")

  const handleFileChange = (event) => {
    const selectedFile = event.target.files ? event.target.files[0] : null
    if (selectedFile) {
      setFile(selectedFile)
      setFileName(selectedFile.name)
    }
  }

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
                <p className="mt-2 text-sm text-gray-500">{fileName}</p>
              )}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-full">{file===null ?'Upload' : 'Re Upload'}</Button>
      </CardFooter>
    </Card>
  )
}
