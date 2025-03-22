"use client";

import MainCard from "@/components/parts/MainCard";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Questions from "@/components/parts/Questions";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center text-center">
        {/* Main Card with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-10"
        >
          <MainCard />
        </motion.div>

        {/* Questions Section */}

        {/* Testimonials Section */}
        

        {/* Call to Action Section */}
        <motion.section
          className="mt-12 p-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">
            Sign up today and explore all the amazing features we have to offer.
          </p>
          <Button variant="outline" className="bg-white text-blue-500 hover:text-white">
            Get Started
          </Button>
        </motion.section>

        {/* Features Section with Tabs */}
        <motion.section
          className="mt-16 p-6 w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Explore Features</h2>
          <Tabs defaultValue="feature1" className="w-[80%] mx-auto">
            <TabsList>
              <TabsTrigger value="feature1">Feature 1</TabsTrigger>
              <TabsTrigger value="feature2">Feature 2</TabsTrigger>
              <TabsTrigger value="feature3">Feature 3</TabsTrigger>
            </TabsList>
            <TabsContent value="feature1">
              <p>
                Feature 1 offers seamless integration with your workflow,
                enhancing productivity like never before.
              </p>
              <ul className="list-disc list-inside text-left mx-auto max-w-xl ">
                <li>Integrates with tools like Slack, Trello, and Google Workspace.</li>
                <li>Automates repetitive tasks with customizable workflows.</li>
                <li>Provides real-time updates and notifications for team collaboration.</li>
              </ul>
            </TabsContent>
            <TabsContent value="feature2">
              <p>
                Feature 2 brings AI-powered insights to help you make better
                decisions.
              </p>
              <ul className="list-disc list-inside text-left mx-auto max-w-xl ">
                <li>Analyzes trends and patterns for predictive analytics.</li>
                <li>Generates detailed reports with visualizations for easy comprehension.</li>
                <li>Delivers tailored suggestions to improve efficiency and outcomes.</li>
              </ul>
            </TabsContent>
            <TabsContent value="feature3">
              <p>
                Feature 3 is designed with user experience in mind, providing
                intuitive navigation and functionality.
              </p>
              <ul className="list-disc list-inside text-left mx-auto max-w-xl ">
                <li>Clean and modern design that minimizes distractions.</li>
                <li>Adaptive layouts optimized for both desktop and mobile devices.</li>
                <li>Quick setup and easy-to-follow onboarding tutorials.</li>
              </ul>
            </TabsContent>
          </Tabs>
        </motion.section>
      </main>
    </div>
  );
}
