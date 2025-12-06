'use client'

import { useActionState } from 'react'
import { saveUserProfile } from '../action'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function ProfileSetupPage() {
  const [state, formAction] = useActionState(saveUserProfile, { success: false, message: '' })
  const router = useRouter()
  const { user } = useUser()

  useEffect(() => {
    if (state.success) {
      router.push('/')
    }
  }, [state.success, router])

  if (!user) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Complete Your Profile</h2>
          <p className="mt-2 text-sm text-gray-600">Tell us more about your preferences</p>
        </div>
        
        <form action={formAction} className="bg-white py-8 px-6 shadow-md rounded-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              defaultValue={user.firstName + ' ' + user.lastName}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="preferences" className="block text-sm font-medium text-gray-700">
              Fabric Preferences (Optional)
            </label>
            <textarea
              id="preferences"
              name="preferences"
              placeholder="e.g., Silk, Cotton, Wool"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          {state.message && (
            <p className={`text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
              {state.message}
            </p>
          )}
          
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  )
}