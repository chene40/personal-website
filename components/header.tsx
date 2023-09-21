"use client";

// Library/Module Imports
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="bg-gray-800">
      <div className="flex text-white text-center overflow-x-scroll sm:overflow-hidden p-8">
        {/* Replace the header with an icon or something? */}
        <motion.div whileHover={{ scale: 1.2 }} className="mr-12">
          <Link href="/">Home</Link>
        </motion.div>
        <header className="flex justify-end space-x-10">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="/projects">Projects</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="/experiences">Experiences</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="/interests">Interests</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link href="/Eric_Chen_Resume.pdf" download="Eric_Chen_Resume.pdf">
              Resume
            </Link>
          </motion.div>
        </header>
      </div>
    </div>
  );
}
