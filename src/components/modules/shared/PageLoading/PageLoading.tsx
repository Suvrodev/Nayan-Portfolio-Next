import { Loader2 } from "lucide-react";
import React from "react";

const PageLoading = () => {
  return (
    <div className="min-h-screen w-[100%] flex flex-col items-center justify-center bg-[[#1F1F1F]]  text-white">
      <Loader2 className="h-12 w-12 animate-spin text-white mb-4" />
      <p className="text-lg text-white/80 animate-pulse tracking-wide">
        Loading content, please wait...
      </p>
    </div>
  );
};

export default PageLoading;
