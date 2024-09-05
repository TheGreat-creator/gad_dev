"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="flex min-h-screen w-full"
      style={{
        backgroundImage:
          "url('/images/Background.png'), linear-gradient(to right, rgba(255, 105, 180, 0.4), rgba(0, 191, 255, 0.4))",
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
          <div>
            <h1 className="text-center text-5xl font-extrabold tracking-tight text-white">
              Welcome to the GAD Office
            </h1>
            <p className="mt-2 text-center text-lg text-gray-100">
              Empowering Gender Equity & Development
            </p>
          </div>
          <div className="text-sm relative flex justify-center">
            <Link
              href="/acad"
              className="flex w-full justify-center rounded-md bg-gradient-to-r from-yellow-400 to-green-500 py-2 px-3 text-sm font-semibold text-[#121212] shadow-lg hover:from-yellow-500 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e6e6]"
              prefetch={false}
            >
              START
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialMediaIcon({ platform }) {
  let iconPath;
  switch (platform) {
    case "twitter":
      iconPath = (
        <svg
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
          <path d="M23 3a10.96 10.96 0 0 1-3.14 1.08A5.46 5.46 0 0 0 22.4 1a10.82 10.82 0 0 1-3.42 1.3A5.46 5.46 0 0 0 16.8 4a5.3 5.3 0 0 0 1.94-.54 5.46 5.46 0 0 0-4.6 2.5A5.48 5.48 0 0 0 11 8.62a15.56 15.56 0 0 1-11.2-5.6 5.45 5.45 0 0 0 1.68 7.3A5.5 5.5 0 0 1 1 9.5v.07a5.48 5.48 0 0 0 4.39 5.36A5.5 5.5 0 0 1 4 15v.07a5.52 5.52 0 0 0 5.2 5.4A11 11 0 0 1 0 20.5a15.6 15.6 0 0 0 8.9 2.7c10.69 0 16.5-8.9 16.5-16.6 0-.27 0-.54-.02-.81A11.4 11.4 0 0 0 24 4.8a11.17 11.17 0 0 1-3.03.82z" />
        </svg>
      );
      break;
    case "facebook":
      iconPath = (
        <svg
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
          <path d="M18 2v2a4 4 0 0 1 4 4v2h-2v6h-4v-6h-2v-2h2v-2a2 2 0 0 1 2-2h2z" />
        </svg>
      );
      break;
    default:
      iconPath = null;
  }

  return <span className="mr-2">{iconPath}</span>;
}
