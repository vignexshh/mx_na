// src/app/welcome/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

const WelcomePage = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session?.user) {
        setUser(session.user)
      } else {
        router.push('/signup')  // Redirect to signup if no user is logged in
      }
    }

    checkUser()
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {user ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Welcome, {user.email}!</h1>
          <p>You have successfully signed in with a magic link.</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default WelcomePage
