"use client";

import Link from "next/link";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex min-h-screen w-full"
      style={{
        backgroundImage:
          "url('/images/backgroundimage.png'), linear-gradient(to right, rgba(255, 255, 0, 0.4), rgba(0, 255, 0, 0.4))",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8">
        <div className="w-full max-w-lg space-y-8 p-6 bg-gradient-to-r from-yellow-400 to-green-500 rounded-lg shadow-lg">
          <div>
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-black">
              Create a new account
            </h2>
            <p className="mt-2 text-center text-sm text-[darkblue]">
              Or{" "}
              <Link
                href="/login"
                className="font-medium hover:text-[blue]"
                prefetch={false}
              >
                sign in to your account
              </Link>
            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor="full-name" className="sr-only">
                Full Name
              </Label>
              <Input
                id="full-name"
                name="full-name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-2 pl-3 pr-3 text-[#00e6e6] ring-1 ring-inset ring-[#00e6e6]/50 placeholder:text-[#00e6e6]/70 bg-skyblue focus:ring-2 focus:ring-inset focus:ring-[#00e6e6] sm:text-sm sm:leading-6"
                placeholder="Full Name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-2 pl-3 pr-3 text-[#00e6e6] ring-1 ring-inset ring-[#00e6e6]/50 placeholder:text-[#00e6e6]/70 bg-skyblue focus:ring-2 focus:ring-inset focus:ring-[#00e6e6] sm:text-sm sm:leading-6"
                placeholder="Email address"
              />
            </div>

            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-[#00e6e6] ring-1 ring-inset ring-[#00e6e6]/50 placeholder:text-[#00e6e6]/70 bg-skyblue focus:ring-2 focus:ring-inset focus:ring-[#00e6e6] sm:text-sm sm:leading-6"
                  placeholder="Password"
                  style={{ paddingRight: "2.5rem" }} // Ensure icon space
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-[#00e6e6]" />
                  ) : (
                    <FaEye className="text-[#00e6e6]" />
                  )}
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-[#00e6e6] ring-1 ring-inset ring-[#00e6e6]/50 placeholder:text-[#00e6e6]/70 bg-skyblue focus:ring-2 focus:ring-inset focus:ring-[#00e6e6] sm:text-sm sm:leading-6"
                  placeholder="Confirm Password"
                  style={{ paddingRight: "2.5rem" }} // Ensure icon space
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={handlePasswordToggle}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-[#00e6e6]" />
                  ) : (
                    <FaEye className="text-[#00e6e6]" />
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="terms"
                  name="terms"
                  className="h-4 w-4 text-[#00e6e6] border-black rounded-sm focus:ring-[#00b3b3] bg-white"
                />
                <Label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-black"
                >
                  I agree to the Terms and Conditions
                </Label>
              </div>
            </div>
            <div>
              <Link
                href="/homepage"
                className="flex w-full justify-center rounded-md bg-[#00e6e6] py-2 px-3 text-sm font-semibold text-[#121212] shadow-lg hover:bg-[#00b3b3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e6e6]"
                prefetch={false}
              >
                Sign Up
              </Link>
            </div>
          </form>

          <div className="text-sm relative flex justify-center">
            <Link
              href="/login"
              className="font-medium text-[darkblue] hover:text-[blue]"
              prefetch={false}
            >
              Already have an account? Sign in here
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <div className="w-full max-w-md flex flex-col items-center justify-center space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight">
              Welcome to the GAD Office
            </h2>
            <p className="mt-2 text-sm text-green-yellow">
              Join us in promoting gender equality and development.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/aurora.png"
              alt="Futuristic"
              width={256}
              height={256}
              className="text-[#00e6e6] shadow-lg rounded-lg"
              style={{ aspectRatio: "256/256", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l2 7h7l-5 4 2 7-6-4-6 4 2-7-5-4h7z" />
    </svg>
  );
}
