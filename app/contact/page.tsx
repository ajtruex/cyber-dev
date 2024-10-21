"use client"

import { motion } from "framer-motion"
import WireframeIcon from "@/components/WireframeIcon"

const contactIcons = {
  github: [
    "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
  ],
  linkedin: [
    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    "M2 9h4v12H2z",
    "M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z",
  ],
  email: [
    "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
    "M22 6l-10 7L2 6",
  ],
}

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-cyan-500 shadow-neon"
    >
      <h2 className="text-2xl font-bold mb-4">ESTABLISH UPLINK</h2>
      <div className="space-y-4">
        {Object.entries(contactIcons).map(([platform, paths]) => (
          <motion.a
            key={platform}
            href={
              platform === "email"
                ? "mailto:example@example.com"
                : `https://${platform}.com`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-cyan-500 p-2 rounded-lg text-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
            }}
          >
            <WireframeIcon paths={paths} />
            {platform.toUpperCase()}
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
