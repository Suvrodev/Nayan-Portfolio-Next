"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const LoadingClient = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        >
          <Loader2 size={50} className="text-teal-400 animate-spin" />
        </motion.div>

        {/* Text */}
        <p className="text-lg text-white/80 animate-pulse tracking-wide">
          Loading content, please wait...
        </p>
      </motion.div>
    </div>
  );
};

export default LoadingClient;
