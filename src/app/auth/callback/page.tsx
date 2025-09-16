'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // First, check if there's a code in the URL (from OAuth redirect)
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')
        
        if (code) {
          // If there's a code, exchange it for a session
          const { data, error } = await supabase.auth.exchangeCodeForSession(code)
          
          if (error) {
            console.error('Error exchanging code for session:', error)
            router.push('/?error=auth_error')
            return
          }
          
          if (data.session) {
            // Get the stored redirect URL
            const redirectUrl = localStorage.getItem('auth_redirect_url')
            localStorage.removeItem('auth_redirect_url') // Clean up
            
            // Redirect to the stored URL or homepage
            router.push(redirectUrl || '/?success=authenticated')
            return
          }
        }
        
        // If no code, check existing session
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Error during auth callback:', error)
          router.push('/?error=auth_error')
          return
        }

        if (data.session) {
          // Get the stored redirect URL
          const redirectUrl = localStorage.getItem('auth_redirect_url')
          localStorage.removeItem('auth_redirect_url') // Clean up
          
          // Redirect to the stored URL or homepage
          router.push(redirectUrl || '/?success=authenticated')
        } else {
          // No session found, redirect to homepage
          router.push('/')
        }
      } catch (error) {
        console.error('Unexpected error in auth callback:', error)
        router.push('/?error=unexpected_error')
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Procesando autenticación...
        </p>
      </div>
    </div>
  )
}