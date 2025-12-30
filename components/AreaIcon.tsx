import React from 'react';

interface AreaIconProps {
  size?: number;
  className?: string;
}

const AreaIcon: React.FC<AreaIconProps> = ({ size = 20, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10 50H54" />
      <path d="M14 12V50" />
      <path d="M8 12H20" />
      <path d="M8 50H20" />
      <path d="M22 50V30" />
      <path d="M22 30L34 20L46 30" />
      <path d="M46 30V50" />
      <rect x="28" y="38" width="6" height="6" />
      <rect x="38" y="38" width="8" height="12" />
    </svg>
  );
};

export default AreaIcon;
