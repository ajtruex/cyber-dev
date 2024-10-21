"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-cyan-500 shadow-neon"
    >
      <h2 className="text-2xl font-bold mb-4">PROJECT MATRIX</h2>
      <div className="space-y-4">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="space-y-4">
              <Link href={`/projects/${project.route}`}>
                <motion.div
                  className="border border-cyan-500 p-4 rounded-lg"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
                  }}
                >
                  <h3 className="font-bold text-violet-600">{project.name}</h3>
                  <p>{project.description}</p>
                  {/* <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-violet-600"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div> */}
                </motion.div>
              </Link>
            </div>
          )
        })}
        {/* <Link href={`/projects/${project.route}`}>
          <motion.div
            className="border border-cyan-500 p-4 rounded-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
            }}
          >
            <h3 className="font-bold text-violet-600">NEXT MOVIES</h3>
            <p>A movie review aggregator made with Next.js.</p>
            <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-violet-600"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </Link> */}
        {/* <motion.div
          className="border border-cyan-500 p-4 rounded-lg"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
          }}
        >
          <h3 className="font-bold text-violet-600">CYBER REALM</h3>
          <p>Virtual reality experience builder</p>
          <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-violet-600"
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </div>
        </motion.div> */}
      </div>
    </motion.div>
  )
}
