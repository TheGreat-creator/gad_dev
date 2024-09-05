"use client";

import Link from "next/link";

export default function AcademicPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      {/* Slightly Blurred Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/images/Background.png'), linear-gradient(to right, rgba(30, 144, 255, 0.4), rgba(0, 191, 255, 0.4))", // Soft blue tones for gradient
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundBlendMode: "overlay",
          filter: "blur(3px)",
          zIndex: "-1", // Keep this behind the content
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative w-full max-w-7xl p-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            ACADEMIC DEPARTMENTS
          </h1>
        </div>

        {/* Button Layout */}
        <div className="flex justify-center space-x-20">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            {[
              { label: "BSIT", path: "/academic/manageevents/bsit" },
              { label: "FORESTRY", path: "/academic/manageevents/forestry" },
              { label: "EDUC", path: "/academic/manageevents/educ" },
            ].map(({ label, path }) => (
              <div key={label} className="flex justify-start">
                <Link
                  href={path}
                  className="w-full max-w-2xl flex justify-center items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-20 text-lg font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e6e6]" // Matching colors, padding, shadow
                  prefetch={false}
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            {[
              {
                label: "ACCOUNTANCY",
                path: "/academic/manageevents/accountancy",
              },
              {
                label: "ENGINEERING",
                path: "/academic/manageevents/engineering",
              },
              { label: "ETC.", path: "/academic/manageevents/etc" },
            ].map(({ label, path }) => (
              <div key={label} className="flex justify-end">
                <Link
                  href={path}
                  className="w-full max-w-2xl flex justify-center items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-20 text-lg font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e6e6]" // Matching colors, padding, shadow
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
