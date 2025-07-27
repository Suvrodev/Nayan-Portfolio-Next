import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <Loader2 className="h-12 w-12 animate-spin text-teal-400 mb-4" />
      <p className="text-lg text-white/80 animate-pulse tracking-wide">
        Loading content, please wait...
      </p>
    </div>
  );
};

export default LoadingPage;
