"use client";

import MainCard from "@/components/parts/MainCard";
import Questions from "@/components/parts/questions";
import { motion } from "framer-motion";

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
        <motion.div
          className="p-4 flex justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {/* <UploadCard/> */}
          <div className="w-[70%]">
            <Questions />
          </div>
        </motion.div>
      </main>
    </div>
  );
}