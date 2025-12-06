import { SignIn, SignUp } from '@clerk/nextjs'
import { useState } from 'react'

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to Elegant Fabrics</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account or create a new one</p>
        </div>
        
        {/* Tab Toggle */}
        <div className="flex mb-6">
          <button
            onClick={() => setIsSignIn(true)}
            className={`flex-1 py-2 px-4 text-center font-medium rounded-l-md ${
              isSignIn ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`flex-1 py-2 px-4 text-center font-medium rounded-r-md ${
              !isSignIn ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Clerk Components */}
        <div className="bg-white py-8 px-6 shadow-md rounded-lg">
          {isSignIn ? (
            <SignIn 
              routing="path" 
              path="/auth" 
              redirectUrl="/" 
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700',
                  card: 'shadow-none',
                }
              }}
            />
          ) : (
            <SignUp 
              routing="path" 
              path="/auth" 
              redirectUrl="/profile-setup" 
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700',
                  card: 'shadow-none',
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}