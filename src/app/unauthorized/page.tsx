"use client";

import { useRouter } from "next/navigation";

const UnauthorizedPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-800">
      <h1 className="text-4xl font-bold mb-4">403 - Unauthorized</h1>
      <p className="mb-6 text-lg">
        You do not have permission to access this page.
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Go Home
      </button>
    </div>
  );
};

export default UnauthorizedPage;
