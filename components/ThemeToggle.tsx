'use client';

import { useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    // For now, just toggle state without applying dark theme
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 border border-black bg-white hover:bg-black hover:text-white transition-colors focus:outline-black focus:outline-1"
      aria-label="Toggle theme"
    >
      <div className="w-4 h-4 relative">
        {isDark ? (
          // Moon icon
          <div className="w-full h-full border-2 border-current rounded-full relative">
            <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-current rounded-full"></div>
          </div>
        ) : (
          // Sun icon
          <div className="w-full h-full relative">
            <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 border border-current rounded-full"></div>
            <div className="absolute top-0 left-1/2 w-px h-1 -translate-x-1/2 bg-current"></div>
            <div className="absolute bottom-0 left-1/2 w-px h-1 -translate-x-1/2 bg-current"></div>
            <div className="absolute left-0 top-1/2 w-1 h-px -translate-y-1/2 bg-current"></div>
            <div className="absolute right-0 top-1/2 w-1 h-px -translate-y-1/2 bg-current"></div>
          </div>
        )}
      </div>
    </button>
  );
}