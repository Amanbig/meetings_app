"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Questions from "@/components/parts/Questions";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">
          Discover who we are and what drives us to deliver excellence.
        </p>
      </header>

      <main className="container mx-auto py-16 px-4">
        {/* Company Mission Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
            At <strong>Meetings Summarizer</strong>, we aim to simplify your
            daily tasks with cutting-edge AI solutions. Our mission is to make
            your meetings and workflows more efficient by providing
            comprehensive tools to summarize, analyze, and optimize your
            productivity.
          </p>
        </motion.section>

        

        {/* Call to Action Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Want to Learn More About Us?
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Explore our platform and discover how we can help you achieve your
            goals. Whether it's summarizing meetings or optimizing workflows,
            we're here to make your life easier.
          </p>
          <Button variant="default" className="text-lg px-8 py-3">
            Contact Us <ArrowRight className="ml-2" />
          </Button>
        </motion.section>
        <motion.div
          className="p-4 flex justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="w-[70%]">
            <Questions />
          </div>
        </motion.div>
      </main>
    </div>
  );
}
