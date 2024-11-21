"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-gray-700 pb-6">
          {/* Branding and Description */}
          <div className="">
            <h2 className="text-3xl font-bold mb-4">Meetings Summarizer</h2>
            <p className="text-sm text-gray-400 mb-6">
              Chatbots can be custom-built to suit various industries and use
              cases—from customer service and sales to entertainment and
              education. These help to get answers to questions that are
              related to a particular topic while keeping the history.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Meetings Summarizer. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
