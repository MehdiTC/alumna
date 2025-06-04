'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">Alumna</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Features
            </Link>
            <Link href="/#demo-form" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Demo
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Pricing
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/setup" className="ml-2">
              <button className="bg-indigo-600 text-white font-semibold rounded-full px-6 py-2 shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Set Up
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  )
} 