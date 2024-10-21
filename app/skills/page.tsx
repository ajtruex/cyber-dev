"use client"

import { motion } from "framer-motion"

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa"
import { RiNextjsLine } from "react-icons/ri"

const skillIcons = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  Python: <FaPython />,
  "Next.js": <RiNextjsLine />,
}

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-cyan-500 shadow-neon"
    >
      <h2 className="text-2xl font-bold mb-4">SKILL MATRIX</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(skillIcons).map(([skill, icon], index) => (
          <motion.div
            key={skill}
            className="border border-cyan-500 p-2 rounded-lg text-center relative overflow-hidden"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
            {skill}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-violet-600"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
