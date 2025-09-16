'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

interface GoogleAuthButtonProps {
  className?: string
  text?: string
  redirectTo?: string
  onSuccess?: () => void
  onError?: (error: any) => void
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({
  className = '',
  text = 'Continuar con Google',
  redirectTo,
  onSuccess,
  onError
}) => {
  const { signInWithGoogle, loading } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signInWithGoogle(redirectTo)
      onSuccess?.()
    } catch (error) {
      console.error('Error signing in with Google:', error)
      onError?.(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleGoogleSignIn}
      disabled={loading || isLoading}
      className={`
        inline-flex items-center justify-center gap-3 rounded-xs border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700
        ${className}
      `}
    >
      {(loading || isLoading) ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-primary"></div>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
      )}
      {text}
    </button>
  )
}

interface UserProfileProps {
  className?: string
  showSignOut?: boolean
  onSignOut?: () => void
}

export const UserProfile: React.FC<UserProfileProps> = ({
  className = '',
  showSignOut = true,
  onSignOut
}) => {
  const { user, signOut } = useAuth()
  const [isSigningOut, setIsSigningOut] = useState(false)

  if (!user) {
    return null
  }

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      await signOut()
      onSignOut?.()
    } catch (error) {
      console.error('Error signing out:', error)
    } finally {
      setIsSigningOut(false)
    }
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-2">
        {user.user_metadata?.avatar_url && (
          <img
            src={user.user_metadata.avatar_url}
            alt={user.user_metadata?.full_name || user.email || 'Usuario'}
            className="h-8 w-8 rounded-full"
          />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {user.user_metadata?.full_name || user.email}
          </span>
          {user.user_metadata?.full_name && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {user.email}
            </span>
          )}
        </div>
      </div>
      {showSignOut && (
        <button
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="text-xs text-red-600 hover:text-red-800 disabled:opacity-50 dark:text-red-400 dark:hover:text-red-300"
        >
          {isSigningOut ? 'Saliendo...' : 'Salir'}
        </button>
      )}
    </div>
  )
}