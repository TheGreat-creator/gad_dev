"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="flex min-h-screen w-full"
      style={{
        backgroundImage:
          "url('/images/Background.png'), linear-gradient(to right, rgba(30, 144, 255, 0.4), rgba(0, 191, 255, 0.4))", // Unified soft blue tones for gradient
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Welcome to the GAD Office section */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8">
        <div
          className="w-full max-w-md space-y-8 p-6"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <div className="text-sm relative flex justify-center">
            <Link
              href="/academic"
              className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-6 px-10 text-sm font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e6e6]" // Increased padding
              prefetch={false}
            >
              ACADEMIC
            </Link>
          </div>
          <div className="text-sm relative flex justify-center">
            <Link
              href="/nonacademic"
              className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-6 px-10 text-sm font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e6e6]" // Increased padding
              prefetch={false}
            >
              NON ACADEMIC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
