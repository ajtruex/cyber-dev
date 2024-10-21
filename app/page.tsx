"use client"

import { motion } from "framer-motion"
// import Portfolio from "@/components/portfolio"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-cyan-500 shadow-neon"
    >
      {/* <Portfolio /> */}
      <h1 className="text-4xl font-bold mb-4 glitch" data-text="CYBER DEV">
        CYBER DEV
      </h1>
      <p className="mb-4 text-lg">
        Crafting digital realities in the virtual frontier.
      </p>
      <div className="inline-block relative">
        <motion.div
          className="absolute -top-2.5 -right-2.5 opacity-60 w-4 h-4 bg-violet-600 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
        <p className="text-sm">SYSTEM STATUS: ONLINE</p>
      </div>
    </motion.div>
  )
}
