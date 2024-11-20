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

        {/* Team Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-6">Our Team</h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-6">
            We are a passionate group of developers, designers, and innovators
            dedicated to delivering high-quality solutions tailored to your
            needs. With a shared vision for excellence, we strive to create
            tools that empower individuals and teams worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg w-72 text-center">
              <img
                src="/team-member1.jpg"
                alt="Team Member 1"
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Founder & CEO
              </p>
            </div>
            <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg w-72 text-center">
              <img
                src="/team-member2.jpg"
                alt="Team Member 2"
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Product Manager
              </p>
            </div>
            <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg w-72 text-center">
              <img
                src="/team-member3.jpg"
                alt="Team Member 3"
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Alice Johnson</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Lead Developer
              </p>
            </div>
          </div>
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
