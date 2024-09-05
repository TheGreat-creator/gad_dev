import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-col items-center justify-center bg-[#0a1929] px-4 py-12 sm:px-6 lg:px-8 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#00e6e6]">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-[#b366ff]">
              Or{" "}
              <Link
                href="/signup"
                className="font-medium hover:text-[#00e6e6]"
                prefetch={false}
              >
                sign up for a new account
              </Link>
            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MailIcon className="h-5 w-5 text-[#00e6e6]" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-[#00e6e6] ring-1 ring-inset ring-[#00e6e6] placeholder:text-[#00e6e6]/50 focus:ring-2 focus:ring-inset focus:ring-[#00e6e6] sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockIcon className="h-5 w-5 text-[#00e6e6]" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-[#00e6e6] ring-1 ring-inset ring-[#00e6e6] placeholder:text-[#00e6e6]/50 focus:ring-2 focus:ring-inset focus:ring-[#00e6e6] sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="remember-me"
                  name="remember-me"
                  className="h-4 w-4 text-[#00e6e6] border-[#00e6e6] rounded-sm focus:ring-[#00b3b3] bg-[#0a1929]"
                />
                <Label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-[#00e6e6]"
                >
                  Remember me
                </Label>
              </div>
              <div className="text-sm">
                <Link
                  href="#"
                  className="font-medium text-[#b366ff] hover:text-[#00e6e6]"
                  prefetch={false}
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#00e6e6] py-2 px-3 text-sm font-semibold text-[#0a1929] shadow-sm hover:bg-[#00b3b3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00e6e6]"
              >
                Sign in
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#00e6e6]/50" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-[#0a1929] px-2 text-[#00e6e6]">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="flex w-full items-center justify-center rounded-md border border-[#00e6e6] py-2 px-3 text-sm font-semibold text-[#00e6e6] shadow-sm hover:bg-[#00e6e6]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00e6e6]"
            >
              <ChromeIcon className="mr-2 h-5 w-5" />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex w-full items-center justify-center rounded-md border border-[#00e6e6] py-2 px-3 text-sm font-semibold text-[#00e6e6] shadow-sm hover:bg-[#00e6e6]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00e6e6]"
            >
              <GitlabIcon className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#00e6e6]">
              Welcome to the GAD Office
            </h2>
            <p className="mt-2 text-sm text-[#b366ff]">
              Sign in to access our powerful tools and features.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/ascot.png"
              alt="GAD Office"
              width={256}
              height={256}
              className="text-[#00e6e6]"
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.42.42 0 0 0 .07.38.39.39 0 0 0 .32.14h6.31a.42.42 0 0 0 .42-.42v-6.31l2.54 7.29a.42.42 0 0 0 .26.26.39.39 0 0 0 .32.14h7.11a.42.42 0 0 0 .07-.38z" />
    </svg>
  );
}

function MailIcon(props) {
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
      <path d="M22 12.8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8.8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zM2 12l10 6 10-6-10-6L2 12z" />
    </svg>
  );
}

function LockIcon(props) {
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
      <path d="M17 10V7a5 5 0 0 0-10 0v3M12 17v2M8 17v2M16 17v2" />
    </svg>
  );
}
