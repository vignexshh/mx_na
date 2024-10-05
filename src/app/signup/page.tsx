'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase'; // Update the path according to your project structure
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true, // Create a new user if they don’t exist
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage('Check your email for the OTP.');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sign Up with Email OTP</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mb-4"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <Button onClick={handleSignup} disabled={loading}>
          {loading ? 'Sending OTP...' : 'Send OTP'}
        </Button>
      </div>
    </div>
  );
};

export default SignupPage;
