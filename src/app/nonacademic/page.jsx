"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/images/Background.png'), linear-gradient(to right, rgba(30, 144, 255, 0.4), rgba(0, 191, 255, 0.4))", // Soft blue tones for gradient
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundBlendMode: "overlay",
          filter: "blur(3px)",
          zIndex: "-1",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative w-full max-w-7xl p-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            NON ACADEMIC DEPARTMENTS
          </h1>
        </div>

        {/* Button Layout */}
        <div className="flex justify-center space-x-20">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            {["FACULTY", "CLINIC", "ETC."].map((label) => (
              <div key={label} className="flex justify-start">
                <Link
                  href="#"
                  className="w-full max-w-2xl flex justify-center items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-20 text-lg font-semibold text-white" // Unified cool tones and white text
                  style={{
                    boxShadow: "12px 12px 24px rgba(0, 0, 0, 0.6)", // Softer shadow
                  }}
                  prefetch={false}
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            {["LIBRARY", "GAD OFFICE", "OFFICE"].map((label) => (
              <div key={label} className="flex justify-end">
                <Link
                  href="#"
                  className="w-full max-w-2xl flex justify-center items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-20 text-lg font-semibold text-white" // Matching left column style
                  style={{
                    boxShadow: "12px 12px 24px rgba(0, 0, 0, 0.6)", // Softer shadow
                  }}
                  prefetch={false}
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
