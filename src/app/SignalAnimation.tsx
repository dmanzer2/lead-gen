// src/app/SignalAnimation.tsx
'use client';
import React from 'react';

interface SignalAnimationProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function SignalAnimation({ className = '', size = 24, color = '#4338CA' }: SignalAnimationProps) {
  return (
    <svg
      className={`signal-svg ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Outer partial circle - fades in last */}
      <path className="signal-outer" fill={color} stroke="none" d="M17.39,15.29c-.19,0-.38-.07-.53-.22-.29-.29-.29-.77,0-1.06,1.7-1.7,2.64-3.86,2.64-6.36s-.94-4.66-2.64-6.36c-.29-.29-.29-.77,0-1.06s.77-.29,1.06,0c1.98,1.98,3.08,4.62,3.08,7.42s-1.09,5.44-3.08,7.42c-.15.15-.34.22-.53.22Z"/>
      <path className="signal-outer" fill={color} stroke="none" d="M3.61,15.29c-.19,0-.38-.07-.53-.22-1.98-1.98-3.08-4.62-3.08-7.42S1.09,2.2,3.08.22c.29-.29.77-.29,1.06,0s.29.77,0,1.06c-1.7,1.7-2.64,3.86-2.64,6.36s.94,4.66,2.64,6.36c.29.29.29.77,0,1.06-.15.15-.34.22-.53.22Z"/>
      {/* Middle partial circle - fades in third */}
      <path className="signal-middle" fill={color} stroke="none" d="M5.73,13.17c-.19,0-.38-.07-.53-.22-2.92-2.92-2.92-7.68,0-10.61.29-.29.77-.29,1.06,0s.29.77,0,1.06c-2.34,2.34-2.34,6.15,0,8.49.29.29.29.77,0,1.06-.15.15-.34.22-.53.22Z"/>
      <path className="signal-middle" fill={color} stroke="none" d="M15.27,13.17c-.19,0-.38-.07-.53-.22-.29-.29-.29-.77,0-1.06,2.34-2.34,2.34-6.15,0-8.48-.29-.29-.29-.77,0-1.06s.77-.29,1.06,0c2.92,2.92,2.92,7.68,0,10.61-.15.15-.34.22-.53.22Z"/>
      {/* Inner partial circle - fades in second */}
      <path className="signal-inner" fill={color} stroke="none" d="M7.85,11.05c-.19,0-.38-.07-.53-.22-1.75-1.75-1.76-4.61,0-6.36.29-.29.77-.29,1.06,0,.29.29.29.77,0,1.06-1.17,1.17-1.17,3.07,0,4.24.29.29.29.77,0,1.06-.15.15-.34.22-.53.22Z"/>
      <path className="signal-inner" fill={color} stroke="none" d="M13.15,11.05c-.19,0-.38-.07-.53-.22-.29-.29-.29-.77,0-1.06,1.17-1.17,1.17-3.07,0-4.24-.29-.29-.29-.77,0-1.06.29-.29.77-.29,1.06,0,1.75,1.75,1.75,4.61,0,6.36-.15.15-.34.22-.53.22Z"/>
      {/* Center dot - fades in first */}
      <circle className="signal-dot" cx="10.5" cy="7.64" r="1.12" fill={color} stroke="none"/>
    </svg>
  );
}
