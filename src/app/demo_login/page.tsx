"use client";
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const EmailAuthComponent = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const otpInputs = useRef([]);

  const handleSendOtp = async () => {
    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setIsOtpSent(true);
        setSuccess('OTP sent successfully. Please check your email.');
        setError('');
      } else {
        setError('Invalid email. Please try again.');
      }
    }, 1000);
  };

  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join('');
    // Simulate OTP verification
    setTimeout(() => {
      if (enteredOtp === '123456') { // Pretend '123456' is the correct OTP
        setSuccess('Authentication successful!');
        setError('');
      } else {
        setError('Invalid OTP. Please try again.');
      }
    }, 1000);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpInputs.current[index + 1].focus();
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Email Authentication</CardTitle>
        <CardDescription>Enter your email to receive an OTP</CardDescription>
      </CardHeader>
      <CardContent>
        {!isOtpSent ? (
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
        ) : (
          <div className="flex justify-between mb-4">
            {otp.map((digit, index) => (
              <Input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-10 text-center"
                ref={(el) => (otpInputs.current[index] = el)}
              />
            ))}
          </div>
        )}
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert className="mt-4">
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={!isOtpSent ? handleSendOtp : handleVerifyOtp} className="w-full">
          {!isOtpSent ? 'Send OTP' : 'Verify OTP'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EmailAuthComponent;