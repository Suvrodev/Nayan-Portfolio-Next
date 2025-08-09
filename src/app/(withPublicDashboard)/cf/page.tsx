"use client";

import { useState } from "react";

const CheckFontPage = () => {
  const [pxValue, setPxValue] = useState<number>(16);
  const [remValue, setRemValue] = useState<number>(1);
  const baseFontSize = 16; // Default browser root font size

  const handlePxChange = (value: number) => {
    setPxValue(value);
    setRemValue(value / baseFontSize);
  };

  const handleRemChange = (value: number) => {
    setRemValue(value);
    setPxValue(value * baseFontSize);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className=" shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold  mb-4">PX ↔ REM Converter</h1>

        {/* PX Input */}
        <label className="block mb-2 ">PX Value</label>
        <input
          type="number"
          value={pxValue}
          onChange={(e) => handlePxChange(Number(e.target.value))}
          className="w-full border rounded-lg px-3 py-2 mb-4 outline-none focus:ring focus:ring-blue-300"
        />

        {/* REM Input */}
        <label className="block mb-2 ">REM Value</label>
        <input
          type="number"
          step="0.01"
          value={remValue}
          onChange={(e) => handleRemChange(Number(e.target.value))}
          className="w-full border rounded-lg px-3 py-2 mb-4 outline-none focus:ring focus:ring-blue-300"
        />

        {/* Preview Text */}
        <div className="mt-6 border-t pt-4">
          <p className=" mb-2">Preview:</p>
          <p style={{ fontSize: `${pxValue}px` }} className="">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckFontPage;
