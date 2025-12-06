'use client'

import { useState } from 'react'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { isSignedIn } = useUser()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Elegant Fabrics
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link href="#services" className="text-gray-700 hover:text-indigo-600">Services</Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-indigo-600">Portfolio</Link>
            <Link href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link href="/auth" className="text-gray-700 hover:text-indigo-600">Sign In</Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-4 space-y-1">
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</Link>
              <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</Link>
              <Link href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Portfolio</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</Link>
              {!isSignedIn && <Link href="/auth" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Sign In</Link>}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}