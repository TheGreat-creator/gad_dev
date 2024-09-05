"use client"; // This ensures that the component is rendered on the client side

import React from "react";

function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url('/images/night.png'), linear-gradient(to right, rgba(48, 25, 53, 0.8), rgba(62, 44, 107, 0.8), rgba(0, 212, 255, 0.8))",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(20, 20, 20, 0.9)", // Darker and sleek background
          padding: "2rem",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          maxWidth: "900px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
        }}
      >
        {/* Form Section */}
        <div
          style={{
            flex: 2,
            marginRight: "1rem",
            borderRadius: "10px",
            padding: "2rem",
            height: "auto",
            position: "relative",
          }}
        >
          <h1 style={{ fontSize: "1.8rem", color: "#e0e0e0" }}>
            Welcome back!
          </h1>
          <p style={{ fontSize: "1rem", color: "#b0b0b0" }}>
            Were thrilled to see you again!
          </p>
          <input
            type="text"
            placeholder="EMAIL OR PHONE NUMBER"
            style={{
              display: "block",
              width: "100%",
              padding: "0.75rem",
              marginTop: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "5px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#ffffff",
            }}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            style={{
              display: "block",
              width: "100%",
              padding: "0.75rem",
              marginTop: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "5px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#ffffff",
            }}
          />
          <p>
            <a href="#" style={{ color: "#50C8FF", textDecoration: "none" }}>
              Forgot your password?
            </a>
          </p>
          <a href="/signup">
            <button
              style={{
                backgroundColor: "#5865F2",
                color: "white",
                width: "100%",
                padding: "0.75rem",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Log In
            </button>
          </a>
          <p style={{ marginTop: "1rem", color: "#b0b0b0" }}>
            Need an account?{" "}
            <a href="#" style={{ color: "#50C8FF", textDecoration: "none" }}>
              Register
            </a>
          </p>

          {/* Social Login Section */}
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                backgroundColor: "#ffffff",
                color: "#4285F4", // Google Blue
                display: "flex",
                alignItems: "center",
                padding: "0.75rem",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                width: "48%",
                fontSize: "0.9rem",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                fill="none"
                style={{ marginRight: "0.5rem" }}
              >
                <path
                  d="M23.49 22.29c0-1.37-.13-2.7-.37-3.97H12v7.8h6.37c-3.09 2.89-7.09 4.79-11.97 4.79-1.38 0-2.74-.13-4.08-.39 4.56 2.95 9.97 4.67 15.96 4.67 9.66 0 17.5-7.81 17.5-17.48z"
                  fill="#4285F4" // Google Blue
                />
              </svg>
              Continue with Google
            </button>
            <button
              style={{
                backgroundColor: "#ffffff",
                color: "#4267B2", // Facebook Blue
                display: "flex",
                alignItems: "center",
                padding: "0.75rem",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                width: "48%",
                fontSize: "0.9rem",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                style={{ marginRight: "0.5rem" }}
              >
                <path
                  d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36c0 .73.59 1.32 1.32 1.32h11.5v-9.3H9.39v-3.62h3.43V9.41c0-3.42 2.1-5.3 5.17-5.3 1.47 0 2.73.11 3.09.16v3.58h-2.12c-1.66 0-1.98.79-1.98 1.93v2.54h3.96l-.52 3.62h-3.44v9.3h6.75c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z"
                  fill="#4267B2" // Facebook Blue
                />
              </svg>
              Continue with Facebook
            </button>
          </div>
        </div>

        {/* QR Section */}
        <div
          style={{
            flex: 1,
            paddingLeft: "1rem",
            borderRadius: "10px",
            padding: "2rem",
            height: "auto",
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            src="/images/ascot.png"
            alt="QR Code"
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "1rem",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <p style={{ color: "#e0e0e0" }}>Log in to GAD office</p>
          <p style={{ color: "#b0b0b0" }}>to manage events</p>
          <p>
            <a
              href="/images/ascot.png"
              style={{ color: "#50C8FF", textDecoration: "none" }}
            >
              Or, sign in with passkey
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
