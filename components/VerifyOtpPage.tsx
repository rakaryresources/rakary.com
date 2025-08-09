"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, RefreshCw, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function VerifyOtpPage({
  email,
  type,
  name,
}: {
  email: string;
  type: string;
  name: string;
}) {
  const router = useRouter();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const firstInput = document.getElementById("otp-0") as HTMLInputElement;
    firstInput?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      (nextInput as HTMLInputElement)?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");

    if (code.length !== 6) {
      toast({
        variant: "destructive",
        title: "Invalid Code",
        description: "Please enter the 6-digit code from your email.",
      });
      return;
    }

    setIsLoading(true);
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "email",
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Verification Failed",
        description: error.message,
      });
    } else if (data.session) {
      if (type === "signup" && name) {
        await supabase.auth.updateUser({ data: { display_name: name } });
      }
      toast({
        title: type === "signup" ? "Account Created!" : "Welcome Back!",
        description: "Redirecting to your dashboard...",
      });
      router.push("/dashboard");
    }

    setIsLoading(false);
  };

  const handleResendOtp = async () => {
    setIsResending(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: type === "signup",
        data: name ? { display_name: name } : undefined,
      },
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Failed to Resend",
        description: error.message,
      });
    } else {
      toast({
        title: "OTP Sent!",
        description: "Check your email for the new code.",
      });
      setOtp(Array(6).fill(""));
      const firstInput = document.getElementById("otp-0") as HTMLInputElement;
      firstInput?.focus();
    }
    setIsResending(false);
  };

  return (
    <div className="flex flex-col items-center gap-6 max-w-sm mx-auto mt-20 p-6 rounded-lg bg-background border border-border">
      <div className="flex flex-col items-center gap-2 text-center">
        <Mail className="w-10 h-10 text-muted-foreground" />
        <h1 className="text-2xl font-bold">Enter Verification Code</h1>
        <p className="text-muted-foreground text-sm">
          We&apos;ve sent a 6-digit code to{" "}
          <span className="font-medium">{email}</span>
        </p>
      </div>

      <form onSubmit={handleVerifyOtp} className="flex flex-col gap-6 w-full">
        <div className="flex justify-between gap-2">
          {otp.map((digit, idx) => (
            <Input
              key={idx}
              id={`otp-${idx}`}
              type="text"
              inputMode="numeric"
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              maxLength={1}
              className="w-12 h-12 text-center text-lg font-mono"
            />
          ))}
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading
            ? "Verifying..."
            : type === "signup"
            ? "Create Account"
            : "Sign In"}
        </Button>
      </form>

      <div className="flex flex-col gap-2 w-full">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleResendOtp}
          disabled={isResending}
        >
          {isResending ? (
            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Mail className="w-4 h-4 mr-2" />
          )}
          {isResending ? "Sending..." : "Resend Code"}
        </Button>

        <Button
          variant="ghost"
          className="w-full"
          onClick={() =>
            router.push(type === "signup" ? "/signup" : "/login")
          }
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {type === "signup" ? "Signup" : "Login"}
        </Button>
      </div>
    </div>
  );
}
