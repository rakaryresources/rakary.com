"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { useToast } from "@/hooks/use-toast";

export function SignupForm({ className, ...props }: React.ComponentProps<"form">) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSignup = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!name.trim()) {
      toast({ variant: "destructive", title: "Name Required", description: "Please enter your full name." });
      return;
    }

    if (!email) {
      toast({ variant: "destructive", title: "Missing Information", description: "Please enter your email address." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ variant: "destructive", title: "Invalid Email", description: "Please enter a valid email address." });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          data: { display_name: name },
        }
      });

      if (error) {
        toast({ variant: "destructive", title: "Signup Failed", description: error.message });
        return;
      }

      toast({ title: "OTP Sent! 📧", description: "Please check your email for a 6-digit verification code." });

      setTimeout(() => {
        window.location.href = `/auth/verify-otp?email=${encodeURIComponent(email)}&type=signup&name=${encodeURIComponent(name)}`;
      }, 1500);

    } catch (error) {
      console.error("Signup error:", error);
      toast({ variant: "destructive", title: "Unexpected Error", description: "An unexpected error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.href + "/dashboard",
          queryParams: { access_type: "offline", prompt: "consent" }
        }
      });

      if (error) {
        toast({ variant: "destructive", title: "Google Signup Failed", description: error.message });
        return;
      }

      toast({ title: "Redirecting to Google...", description: "Taking you to Google for authentication." });
    } catch (error) {
      console.error("Google signup error:", error);
      toast({ variant: "destructive", title: "Google Signup Error", description: "An error occurred. Please try again." });
    }
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSignup} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted-foreground text-sm">Enter your details below to create your account</p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Sending code..." : "Send Verification Code"}
        </Button>
        <div className="relative text-center text-sm after:border-t after:absolute after:inset-0 after:top-1/2 after:flex after:items-center after:border-border">
          <span className="bg-background text-muted-foreground relative z-10 px-2">Or continue with</span>
        </div>
        <Button variant="outline" className="w-full" type="button" onClick={handleGoogleSignup} disabled={isLoading}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-5 w-5">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
          </svg>
          Signup with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account? <Link href="/login" className="underline underline-offset-4">Login</Link>
      </div>
    </form>
  );
}
