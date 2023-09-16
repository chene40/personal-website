"use client";

// Library/Module Imports
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="p-8 bg-gray-800">
      <div className="flex justify-between text-white">
        {/* Replace the header with an icon or something? */}
        <motion.div whileHover={{ scale: 1.2 }}>
          <Link href="/">Home Page</Link>
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
              Resume Copy
            </Link>
          </motion.div>
        </header>
      </div>
    </div>
  );
}
