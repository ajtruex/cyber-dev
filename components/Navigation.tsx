"use client"

// import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()
  const sections = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
    { name: "SKILLS", path: "/skills" },
    { name: "CONTACT", path: "/contact" },
  ]

  return (
    <header className="mb-8 border-b border-cyan-500 pb-4">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <motion.div
            className="text-2xl font-bold text-violet-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CYBER_DEV
          </motion.div>
        </Link>
        <ul className="flex space-x-4">
          {sections.map((section) => (
            <motion.li key={section.name}>
              <Link href={section.path}>
                <motion.span
                  className={`cursor-pointer ${
                    pathname === section.path ? "text-violet-600" : ""
                  }`}
                  whileHover={{ scale: 1.1, color: "#7C22FF" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.name}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
