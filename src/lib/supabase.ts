import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'pkce',
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Helper functions for authentication
export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`
    }
  })
  
  if (error) {
    console.error('Error signing in with Google:', error)
    return { error }
  }
  
  return { data }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    console.error('Error signing out:', error)
    return { error }
  }
  
  return { success: true }
}

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error) {
    console.error('Error getting current user:', error)
    return { error }
  }
  
  return { user }
}

// Helper to subscribe to newsletter
export const subscribeToNewsletter = async (email: string, name?: string) => {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        { 
          email, 
          name,
          subscribed_at: new Date().toISOString(),
          is_active: true
        }
      ])
      .select()
    
    if (error) {
      console.error('Error subscribing to newsletter:', error)
      return { error }
    }
    
    return { data }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { error }
  }
}