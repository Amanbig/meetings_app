import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MainCard() {
  return (
    <div className="pt-20 pb-20 mx-4 flex flex-col text-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-xl shadow-lg border-2 border-gray-700">
      {/* Title */}
      <div className="p-2 text-2xl font-extrabold tracking-wide text-blue-400">
        Meetings Summarizer
      </div>

      {/* Tagline */}
      <div className="p-4 text-4xl font-bold leading-snug">
        <div>Get Answers. Find Inspiration.</div>
        <div>Be More Productive.</div>
      </div>

      {/* Description */}
      <div className="p-3 text-lg text-gray-300 leading-relaxed">
        <p>Free to use. Easy to try.</p>
        <p>Just ask and let the bot assist you in understanding, learning, getting news, and more.</p>
      </div>

      {/* Call-to-Action */}
      <div className=" flex p-4 justify-center text-center ">
        <Link href="/meetings">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md flex items-center justify-center space-x-2 transition-transform transform hover:scale-105">
            <span>Start Now</span>
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
