"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

type AuthState = 'email' | 'password' | 'createAccount' | 'otp' | 'newPassword';

const AuthFlow: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [state, setState] = useState<AuthState>('email');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogue, setDialogue] = useState<string | null>(null);
  
  const router = useRouter();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      if (data) {
        setState('password');
      } else {
        setDialogue("Oops, seems like your email isn't signed up");
        setState('createAccount');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      setState('otp');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.verifyOtp({ email, token: otp, type: 'signup' });
      if (error) throw error;
      setState('newPassword');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleNewPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setState('email');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {dialogue && <p>{dialogue}</p>}
      
      {state === 'email' && (
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Continue'}
          </button>
        </form>
      )}

      {state === 'password' && (
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
      )}

      {state === 'createAccount' && (
        <form onSubmit={handleCreateAccount}>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Create New Account'}
          </button>
        </form>
      )}

      {state === 'otp' && (
        <form onSubmit={handleOtpSubmit}>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Confirm OTP'}
          </button>
        </form>
      )}

      {state === 'newPassword' && (
        <form onSubmit={handleNewPasswordSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create new password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Retype to confirm password"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Confirm Password'}
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthFlow;