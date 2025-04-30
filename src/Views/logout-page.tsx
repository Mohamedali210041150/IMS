import { View } from 'lucide-react'
import React, { useState } from 'react'
import LoginPage from './login-page'

const SudanLogo: React.FC = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 0L173.205 50V150L100 200L26.7949 150V50L100 0Z" fill="#0096FF"/>
    <path d="M140 70L90 120L60 90" stroke="#00FF00" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M80 100L100 120L140 80" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function LogoutPage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = () => {
    setIsLoggingOut(true)
    // Simulating logout process
    setTimeout(() => {
      // Perform actual logout logic here
      console.log('User logged out')
      // Redirect to login page or home page after logout
      // window.location.href = '/login'
    }, 2000)
  }

  const handleCancel = () => {
    // Redirect to dashboard or previous page
    console.log('Logout cancelled')
    // window.location.href = '/dashboard'
  }

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <div className="mb-8 text-center">
            <SudanLogo />
            <h1 className="mt-4 text-4xl font-bold text-[#0096FF]">SUDAN</h1>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <img src="/logo.png?height=32&width=32" alt="SUDAN" className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Logout Confirmation</h2>
          <p className="text-gray-600 mb-8">Are you sure you want to log out?</p>
          <div className="space-y-4">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoggingOut ? 'Logging out...' : 'Logout'}
            </button>
            <button
              onClick={handleCancel}
              disabled={isLoggingOut}
              className={`w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Cancel
            </button>
          </div>
          <p className="mt-8 text-center text-sm text-gray-600">
            Need help?{' '}
            <a href="/#" className="font-medium text-blue-600 hover:text-blue-500">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}