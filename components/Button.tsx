'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary',
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full px-8 py-3 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
  const variantStyles = {
    primary: 'bg-white text-indigo-600 hover:shadow-xl',
    secondary: 'bg-indigo-600 text-white hover:bg-indigo-700'
  }

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    )
  }

  return (
    <button onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  )
} 