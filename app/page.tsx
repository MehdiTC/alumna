'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import FeatureCard from '@/components/FeatureCard'
import DemoCarousel from '@/components/DemoCarousel'
import { Shield, Grid, Bell, Mail, Calendar, CreditCard } from 'lucide-react'
import { useState } from 'react'

const features = [
  {
    title: 'Secure Magic-Link Login',
    description: 'No passwords to remember. Members receive a secure login link via email.',
    image: (
      <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex items-center justify-center w-full h-[220px] md:w-[360px] md:h-[220px]">
        <div className="w-[200px] h-[140px] bg-white rounded-2xl shadow-md flex flex-col items-center justify-center border border-gray-100">
          <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center mb-2">
            <svg width="24" height="24" fill="none" stroke="#7c3aed" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12v1a4 4 0 01-8 0v-1"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M8 10h.01M16 10h.01"/></svg>
          </div>
          <div className="text-xs text-gray-500 mb-1">Email Notification</div>
          <div className="w-36 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm cursor-pointer shadow hover:bg-indigo-700 transition">Click here to sign in</div>
        </div>
      </div>
    )
  },
  {
    title: 'View Fellow Alumni Profiles',
    description: 'Modern, mobile-friendly profiles with real-time updates and search.',
    image: (
      <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex items-center justify-center w-full h-[220px] md:w-[360px] md:h-[220px]">
        <div className="w-full h-full flex flex-col md:flex-row gap-2 p-4">
          {/* Desktop Directory */}
          <div className="hidden md:grid grid-cols-3 gap-2 flex-1">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white rounded-xl shadow p-2 flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mb-2" />
                <div className="font-semibold text-sm">Jane Doe</div>
                <div className="text-xs text-gray-500 mb-1">Consulting</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-indigo-100 text-indigo-700 text-xs rounded px-2">Tech</span>
                  <span className="bg-indigo-100 text-indigo-700 text-xs rounded px-2">Finance</span>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile Directory */}
          <div className="md:hidden grid grid-cols-2 gap-2 w-full">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-white rounded-xl shadow p-2 flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mb-2" />
                <div className="font-semibold text-sm">Jane Doe</div>
                <div className="text-xs text-gray-500 mb-1">Finance</div>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-indigo-100 text-indigo-700 text-xs rounded px-2">Tech</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Create and Manage Profiles Instantly',
    description: 'Access your alumni data from a clean admin dashboard. View and edit tables of profiles, download CSV exports, add custom fields, and manage user accounts—all in one place.',
    image: (
      <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex items-center justify-center w-full h-[220px] md:w-[360px] md:h-[220px]">
        <div className="w-[320px] h-[160px] bg-white rounded-xl shadow flex">
          {/* Sidebar */}
          <div className="w-12 bg-gray-100 flex flex-col items-center py-4 gap-4 border-r">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center"><svg width="20" height="20" fill="none" stroke="#7c3aed" strokeWidth="2" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" rx="2"/></svg></div>
            <div className="w-8 h-8 bg-gray-200 rounded-lg" />
            <div className="w-8 h-8 bg-gray-200 rounded-lg" />
          </div>
          {/* Table */}
          <div className="flex-1 p-3 overflow-x-auto">
            <div className="flex items-center gap-2 mb-2">
              <button className="bg-indigo-600 text-white text-xs px-3 py-1 rounded shadow hover:bg-indigo-700">Export CSV</button>
              <button className="bg-gray-200 text-xs px-2 py-1 rounded">Add Field</button>
              <button className="bg-gray-200 text-xs px-2 py-1 rounded">Filter</button>
              <button className="bg-gray-200 text-xs px-2 py-1 rounded">Edit</button>
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-50">
                  <th className="font-bold text-gray-700 p-1 text-left">Name</th>
                  <th className="font-bold text-gray-700 p-1 text-left">Email</th>
                  <th className="font-bold text-gray-700 p-1 text-left">Pledge Class</th>
                  <th className="font-bold text-gray-700 p-1 text-left">Major</th>
                  <th className="font-bold text-gray-700 p-1 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3].map(i => (
                  <tr key={i} className={i%2 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-1">Jane Doe</td>
                    <td className="p-1">jane@email.com</td>
                    <td className="p-1">Alpha</td>
                    <td className="p-1">CS</td>
                    <td className="p-1">NYC</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
]

export default function Home() {
  // Demo form state (no backend, just UI)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: ''
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600" />
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-24 gap-12 min-h-screen">
          <div className="text-left text-white max-w-xl ml-0 md:ml-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Your Alumni Network, <span className="text-blue-300">Reimagined</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-3xl mb-8"
            >
              Secure magic-link login · Real-time updates
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="#demo-form">
                <button className="bg-white text-indigo-600 font-semibold rounded-full px-8 py-3 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Book Demo
                </button>
              </a>
              <a href="/checkout">
                <button className="bg-emerald-500 text-white font-semibold rounded-full px-8 py-3 shadow-md hover:bg-emerald-600 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                  Set Up Now
                </button>
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-sm text-indigo-100"
            >
              Build a directory in minutes...
            </motion.p>
          </div>
          <div className="hidden md:block flex-1">
            <DemoCarousel />
          </div>
        </div>
      </section>

      {/* Features Section - Three Real Features, closer and more central, middle reversed */}
      <section id="features" className="py-12 bg-white w-full flex justify-center">
        <div className="flex flex-col gap-10 w-full max-w-4xl mx-auto px-4 md:px-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full ${i === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 max-w-[420px] flex flex-col justify-center text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-[#012169] mb-3">{feature.title}</h2>
                <p className="text-base text-gray-700 mb-2">{feature.description}</p>
              </div>
              <div className={`flex-1 flex w-full ${i === 1 ? 'justify-start' : 'justify-center md:justify-end'}`}> 
                {feature.image}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compact Demo Form Section */}
      <section id="demo-form" className="py-16 bg-gray-50 w-full flex items-center justify-center">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 mx-4">
          <h2 className="text-3xl font-bold text-[#012169] mb-6">Get a demo</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action="https://formspree.io/f/xjkrkwvj" method="POST">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
              <input name="First Name" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
              <input name="Last Name" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input name="Email" type="email" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Organization*</label>
              <input name="Organization" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-indigo-600 text-white font-semibold rounded-full px-8 py-3 shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">Submit</button>
            </div>
          </form>
        </div>
      </section>

      {/* Pricing Section - Left headline, right mockup */}
      <section id="pricing" className="py-24 bg-blue-900 text-white">
        <div className="w-full grid md:grid-cols-2 gap-16 items-center px-8 md:px-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              All-in for just <span className="text-blue-300">$20 / month</span>
            </h2>
            <p className="text-lg mb-8">
              Simple, transparent pricing. Cancel anytime.
            </p>
            <Button href="/checkout" variant="primary">
              Set up your directory
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 bg-white/10 rounded-2xl shadow-2xl flex items-center justify-center">
              <span className="text-white/60">[Pricing Mockup]</span>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="w-full px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <p>© 2025 Alumna. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/mehditouhami" className="hover:text-white transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 