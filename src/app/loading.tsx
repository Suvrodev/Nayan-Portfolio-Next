import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-600 text-sm">Loading services...</p>
      </div>
    </div>
  );
};

export default Loading;
