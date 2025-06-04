'use client'

import { motion } from 'framer-motion'

export default function Checkout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl font-semibold mb-6">Secure Checkout</h1>
      
      {/* Replace YOUR_STORE_ID and YOUR_PRODUCT_ID with actual values */}
      <div className="w-full max-w-2xl">
        <iframe
          src="https://YOUR_STORE_ID.lemonsqueezy.com/checkout/buy/YOUR_PRODUCT_ID"
          className="w-full h-[600px] border-0"
          title="Lemon Squeezy Checkout"
        />
      </div>

      <a
        href="https://YOUR_STORE_ID.lemonsqueezy.com/checkout/buy/YOUR_PRODUCT_ID"
        className="mt-4 text-indigo-600 hover:text-indigo-700 underline"
      >
        If checkout doesn't load, click here
      </a>

      <p className="text-sm text-gray-500 mt-8">
        Secure payments powered by Lemon Squeezy
      </p>
    </motion.div>
  )
} 