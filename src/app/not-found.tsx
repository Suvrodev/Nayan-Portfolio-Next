// app/not-found.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Oops! The page you are looking for doesn&#39;t exist.
      </p>
      <div className="mt-6 space-x-4">
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>
        <button
          onClick={() => router.back()}
          className="inline-block px-6 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
