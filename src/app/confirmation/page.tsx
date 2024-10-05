'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const OTPVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const verifyOTP = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    const { data: { session }, error } = await supabase.auth.verifyOtp({
      email,
      token: otp, // OTP entered by the user
      type: 'email', // OTP type is email
    });

    if (error) {
      setError(error.message);
    } else if (session) {
      setMessage('OTP Verified. You are now logged in!');
      // Optionally, redirect to another page like the homepage
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Verify Your OTP</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mb-4"
        />
        <Input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="mb-4"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <Button onClick={verifyOTP} disabled={loading}>
          {loading ? 'Verifying OTP...' : 'Verify OTP'}
        </Button>
      </div>
    </div>
  );
};

export default OTPVerification;
