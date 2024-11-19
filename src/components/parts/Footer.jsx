"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" py-10 border-t-4 bg-black text-white border-t-2 dark:border-white border-black bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Meetings Summarizer</h2>
          <p className="text-sm mb-4">Chatbots can be custom-built to suit various industries and use cases—from customer service and sales to entertainment and education. These help to get answers to questions that are related to particular topic keeping the history.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="GitHub">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center border-t dark:border-white border-black pt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Meetings Summarizer. All rights reserved.</p>
      </div>
    </footer>
  );
}