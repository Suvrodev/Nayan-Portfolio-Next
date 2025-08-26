import React from "react";

const BG2 = () => {
  return (
    <svg
      width="100%"
      height="678"
      viewBox="0 0 1920 678"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g clipPath="url(#clip0_19121_7173)">
        <mask
          id="mask0_19121_7173"
          maskUnits="userSpaceOnUse"
          x="240"
          y="0"
          width="1442"
          height="1443"
          style={{ maskType: "alpha" }}
        >
          <rect
            width="1442"
            height="1442"
            transform="translate(240)"
            fill="url(#paint0_radial_19121_7173)"
          />
        </mask>
        <g mask="url(#mask0_19121_7173)">
          <g clipPath="url(#clip1_19121_7173)">
            {/* All your path elements remain the same */}
            <mask id="path-3-inside-1_19121_7173" fill="white">
              <path d="M191.933 0H288.066V96.1333H191.933V0Z" />
            </mask>
            <path
              d="M288.066 96.1333V97.1347H289.068V96.1333H288.066ZM288.066 0H287.065V96.1333H288.066H289.068V0H288.066ZM288.066 96.1333V95.132H191.933V96.1333V97.1347H288.066V96.1333Z"
              fill="#E2E0ED"
              mask="url(#path-3-inside-1_19121_7173)"
            />

            {/* ... continue with all the other paths ... */}
          </g>
          <rect
            x="0.167198"
            y="0.500695"
            width="1921.67"
            height="1441"
            stroke="#E2E0ED"
            strokeWidth="1.00139"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_19121_7173"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(721 -0.0001719) rotate(90) scale(1442 752.632)"
        >
          <stop />
          <stop offset="0.953125" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_19121_7173">
          <rect width="1920" height="678" fill="white" />
        </clipPath>
        <clipPath id="clip1_19121_7173">
          <rect width="1920" height="1442" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BG2;
