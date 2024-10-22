'use client';  // Indicate this is a Client Component

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { GoogleSignIn } from '@/components/auth/GoogleSignIn'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";


// const ISTTime = {
//   getCurrentTime: function() {
//     // Get the current time in UTC
//     const currentTimeUTC = new Date();

//     // Convert UTC time to IST by adding 5 hours and 30 minutes
//     const offset = 5.5 * 60 * 60 * 1000; // Offset for IST (5 hours 30 minutes in milliseconds)
//     const istTime = new Date(currentTimeUTC.getTime() + offset);

//     return istTime.toLocaleString(); // Return the IST time in a readable format
//   }
// };
// const currentIST = ISTTime.getCurrentTime();

const SignupPage = () => {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState<number | null>(null);
  const [signupFeedback, setSignupFeedback] = useState<string>('');

  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

  // Signup handlers
  const handleSignupPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setSignupPassword(passwordValue);
    
    // Calculate password strength based on custom criteria
    const strength = calculatePasswordStrength(passwordValue);
    setPasswordStrength(strength);
    
    // Provide feedback based on strength
    setSignupFeedback(getPasswordFeedback(strength));
  };

  const calculatePasswordStrength = (password: string) => {
    let score = 0;

    // Criteria for evaluating password strength
    if (password.length >= 8) score += 1;          // Length at least 8 characters
    if (/[a-z]/.test(password)) score += 1;         // Lowercase letters
    if (/[A-Z]/.test(password)) score += 1;         // Uppercase letters
    if (/[0-9]/.test(password)) score += 1;         // Numbers
    if (/[^a-zA-Z0-9]/.test(password)) score += 1;  // Special characters

    return score;  // Score is between 0-5
  };

  const getPasswordFeedback = (score: number) => {
    switch (score) {
      case 0:
        return 'Very Weak: Try a longer password.';
      case 1:
        return 'Weak: Add more letters, numbers, and symbols.';
      case 2:
        return 'Moderate: Try adding uppercase, numbers, and symbols.';
      case 3:
        return 'Strong: Adding symbols can improve strength.';
      case 4:
        return 'Very Strong: Password is solid.';
      case 5:
        return 'Excellent: Great password!';
      default:
        return '';
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup form submission here (Supabase logic for account creation + OTP)
  };

  const handleSigninSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signin form submission here (Supabase logic for signing in)
  };

  return (
    <div className="flex min-h-screen">
      {/* First Column - Black Background */}
      <div className="hidden md:flex w-1/2 bg-black p-[5%] items-center justify-center " >
        <h1 className="text-3xl text-white font-bold mb-6">MedicalHunt ⦿</h1>
      </div>

      {/* Second Column - Default Background */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-end bg-slate-100  md:justify-center">
        <div className="w-full md:max-w-md p-8 bg-white border rounded-t-3xl md:rounded-3xl ">
          
          {/* Tabs for Login and Signup */} 
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Signin</TabsTrigger>
              <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            
            {/* Signin Tab */}
            <TabsContent value="signin">
            <div className="flex justify-center p-10"> <h1 className="text-4xl font-medium mb-6 text-center ">Continue With Existing Account</h1> </div>
              {/* Signin Form */}
              
              <form onSubmit={handleSigninSubmit}>
                {/* Email Input */}
                <div className="mb-4">
                  <Label htmlFor="signin-email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="signin-email"
                    value={signinEmail}
                    onChange={(e) => setSigninEmail(e.target.value)}
                    className="w-full"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <Label htmlFor="signin-password" className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    id="signin-password"
                    value={signinPassword}
                    onChange={(e) => setSigninPassword(e.target.value)}
                    className="w-full"
                    placeholder="Password"
                  />
                </div>

                {/* Sign In Button */}
                <Button type="submit" className="w-full mb-4">
                  Sign In
                </Button>
              </form>
            </TabsContent>
            
            {/* Signup Tab */}
            <TabsContent value="signup">
            <div className="flex justify-center p-10"> <h1 className="text-4xl font-medium mb-6 text-center ">Create New Account</h1> </div>
              
              {/* Create Account Section */}
              
              <form onSubmit={handleSignupSubmit}>
                {/* Email Input */}
                <div className="mb-4">
                  <Label htmlFor="signup-email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="signup-email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="w-full"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <Label htmlFor="signup-password" className="block text-gray-700 text-sm font-bold mb-2">
                    New Password
                  </Label>
                  <Input
                    type="password"
                    id="signup-password"
                    value={signupPassword}
                    onChange={handleSignupPasswordChange}
                    className="w-full"
                    placeholder="Password"
                  />

                  {/* Password Strength Indicator */}
                  {signupPassword && (
                    <div className="mt-2">
                      <p className="text-sm">Password Strength: {getPasswordFeedback(passwordStrength)}</p>
                      <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                          className={`h-2 rounded ${passwordStrength === 0 ? 'bg-red-500' :
                              passwordStrength === 1 ? 'bg-orange-500' :
                                passwordStrength === 2 ? 'bg-yellow-500' :
                                  passwordStrength === 3 ? 'bg-green-500' :
                                    passwordStrength === 4 ? 'bg-blue-500' :
                                      passwordStrength === 5 ? 'bg-purple-500' : ''
                            }`}
                          style={{ width: `${(passwordStrength ?? 0) * 20}%` }}
                        />
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{signupFeedback}</p>
                    </div>
                  )}
                </div>

                {/* Signup Submit Button */}
                <Button type="submit" className="w-full mb-4 ">
                  Continue Sign Up
                </Button>
                <GoogleSignIn />
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;  // Ensure it's exported as default
