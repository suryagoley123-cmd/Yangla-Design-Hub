import React from 'react';

/**
 * Props for Yangla Logo components
 * Supports both Logo Variations:
 * 1. 'full': Full brand signature lockup with top emblem, "Yangla Design &" in stylized purple, and "Printing Hub" in orange (Logo-01)
 * 2. 'mark': Standalone iconic shield/tulip emblem mark with orange/purple petals and white 'Y' (Logo1-01)
 * 3. 'horizontal': Compact horizontal lockup with emblem mark on left and typographic brand on right
 */
export interface YanglaLogoProps {
  /**
   * Layout type:
   * - 'full': Stacked full signature lockup (matches Logo-01.png)
   * - 'horizontal': Inline horizontal brand lockup
   * - 'mark': Standalone emblem icon only (matches Logo1-01.png)
   */
  type?: 'full' | 'horizontal' | 'mark';
  /**
   * Theme mode: 'dark' for dark text on light backgrounds, 'light' for white text on dark backgrounds
   */
  variant?: 'light' | 'dark';
  /**
   * Size presets
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Additional custom CSS classes
   */
  className?: string;
  /**
   * Optional custom emblem size in pixels (overrides preset)
   */
  emblemSize?: number;
}

/**
 * Standalone Emblem Mark Component (Logo1-01.png variation)
 * Symmetrical tulip/shield icon with orange left petal, purple right petal, top indigo wedge, and white 'Y'
 */
export const YanglaEmblem: React.FC<{
  size?: number | string;
  className?: string;
  withShadow?: boolean;
}> = ({ size = 48, className = '', withShadow = false }) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <svg
      viewBox="0 0 100 100"
      className={`select-none shrink-0 ${withShadow ? 'drop-shadow-md' : ''} ${className}`}
      style={{ width: pixelSize, height: pixelSize }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Yangla Design & Printing Hub Emblem"
    >
      <defs>
        {/* Left Petal: Warm Vibrant Orange Gradient */}
        <linearGradient id="yangla-emblem-orange" x1="15%" y1="20%" x2="45%" y2="85%">
          <stop offset="0%" stopColor="#F98A1E" />
          <stop offset="100%" stopColor="#F57C00" />
        </linearGradient>

        {/* Right Petal: Royal Purple / Violet Gradient */}
        <linearGradient id="yangla-emblem-purple" x1="55%" y1="20%" x2="85%" y2="85%">
          <stop offset="0%" stopColor="#8A2594" />
          <stop offset="50%" stopColor="#762184" />
          <stop offset="100%" stopColor="#5E176F" />
        </linearGradient>

        {/* Top Wedge: Deep Violet / Indigo Gradient */}
        <linearGradient id="yangla-emblem-top-wedge" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#371858" />
          <stop offset="100%" stopColor="#6C207D" />
        </linearGradient>
      </defs>

      {/* 1. Left Orange Petal */}
      <path
        d="M 12 18 
           C 12 18, 12 55, 13 62 
           C 15 76, 27 88, 44 91.5 
           L 44 52 
           C 44 46, 38 32, 28 20 
           C 25 16, 20 18, 12 18 Z"
        fill="url(#yangla-emblem-orange)"
      />

      {/* 2. Right Purple Petal */}
      <path
        d="M 88 18 
           C 88 18, 88 55, 87 62 
           C 85 76, 73 88, 56 91.5 
           L 56 52 
           C 56 46, 62 32, 72 20 
           C 75 16, 80 18, 88 18 Z"
        fill="url(#yangla-emblem-purple)"
      />

      {/* 3. Top Center Indigo Wedge */}
      <path
        d="M 27 12 
           C 42 16, 58 16, 73 12 
           C 73 12, 60 25, 50 32 
           C 40 25, 27 12, 27 12 Z"
        fill="url(#yangla-emblem-top-wedge)"
      />

      {/* 4. White Center 'Y' Divider Mask & Shape */}
      {/* Curved arms forming the iconic Y branching smoothly */}
      <path
        d="M 44 92 
           L 56 92 
           L 56 50 
           C 66 38, 76 22, 88 18 
           L 73 12 
           C 62 25, 54 32, 50 32 
           C 46 32, 38 25, 27 12 
           L 12 18 
           C 24 22, 34 38, 44 50 
           Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

/**
 * Full Yangla Logo Component (Supports Logo-01 full lockup, Logo1-01 emblem mark, and horizontal layout)
 */
export const YanglaLogo: React.FC<YanglaLogoProps> = ({
  type = 'horizontal',
  variant = 'dark',
  size = 'md',
  className = '',
  emblemSize
}) => {
  // Size metrics
  const sizes = {
    xs: {
      mark: 24,
      title: 'text-sm',
      sub: 'text-[8px]',
      gap: 'gap-1.5',
      fullMark: 32,
      fullTitle: 'text-base',
      fullSub: 'text-[9px]'
    },
    sm: {
      mark: 32,
      title: 'text-base',
      sub: 'text-[9px]',
      gap: 'gap-2.5',
      fullMark: 44,
      fullTitle: 'text-lg',
      fullSub: 'text-[10px]'
    },
    md: {
      mark: 42,
      title: 'text-xl',
      sub: 'text-[10px]',
      gap: 'gap-3',
      fullMark: 56,
      fullTitle: 'text-2xl',
      fullSub: 'text-xs'
    },
    lg: {
      mark: 52,
      title: 'text-2xl',
      sub: 'text-xs',
      gap: 'gap-3.5',
      fullMark: 72,
      fullTitle: 'text-3xl',
      fullSub: 'text-sm'
    },
    xl: {
      mark: 68,
      title: 'text-3xl',
      sub: 'text-sm',
      gap: 'gap-4',
      fullMark: 96,
      fullTitle: 'text-4xl',
      fullSub: 'text-base'
    }
  };

  const currentSize = sizes[size];
  const calculatedEmblemSize = emblemSize || currentSize.mark;

  // Variation 1: Standalone Emblem Mark (Logo1-01.png)
  if (type === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <YanglaEmblem size={calculatedEmblemSize} withShadow={variant === 'dark'} />
      </div>
    );
  }

  // Variation 2: Full Stacked Signature Lockup (Matches Logo-01.png)
  if (type === 'full') {
    const fullMarkSize = emblemSize || currentSize.fullMark;
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Centered Tulip Emblem */}
        <div className="mb-2 transition-transform duration-300 hover:scale-105">
          <YanglaEmblem size={fullMarkSize} withShadow={variant === 'dark'} />
        </div>

        {/* Primary Brand Text: "Yangla Design &" in Signature Purple */}
        <div className="flex items-center justify-center leading-none">
          <span
            className={`font-sans font-extrabold tracking-tight ${currentSize.fullTitle} ${
              variant === 'light' ? 'text-white' : 'text-[#682A8F]'
            }`}
            style={{
              letterSpacing: '-0.01em',
              fontFamily: "'Syne', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            }}
          >
            Yangla Design{' '}
            <span
              className={variant === 'light' ? 'text-purple-300' : 'text-[#682A8F]'}
              style={{ fontWeight: 800 }}
            >
              &
            </span>
          </span>
        </div>

        {/* Bottom Subtitle: Line - "Printing Hub" - Line in Vibrant Orange */}
        <div className="w-full flex items-center justify-center gap-2 mt-1.5">
          <span
            className={`h-[1.5px] flex-grow max-w-[40px] ${
              variant === 'light' ? 'bg-amber-400/70' : 'bg-[#F57C00]'
            }`}
          />
          <span
            className={`font-sans font-black tracking-[0.22em] uppercase ${currentSize.fullSub} ${
              variant === 'light' ? 'text-amber-300' : 'text-[#F57C00]'
            }`}
          >
            Printing Hub
          </span>
          <span
            className={`h-[1.5px] flex-grow max-w-[40px] ${
              variant === 'light' ? 'bg-amber-400/70' : 'bg-[#F57C00]'
            }`}
          />
        </div>
      </div>
    );
  }

  // Variation 3: Inline Horizontal Lockup (For Navbars & compact headers)
  return (
    <div className={`flex items-center ${currentSize.gap} select-none ${className}`}>
      {/* Emblem Mark on the left */}
      <div className="transition-transform duration-300 group-hover:scale-105 shrink-0">
        <YanglaEmblem size={calculatedEmblemSize} />
      </div>

      {/* Brand Identity Stacked */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-sans font-extrabold tracking-tight ${currentSize.title} ${
            variant === 'light' ? 'text-white' : 'text-[#682A8F]'
          }`}
          style={{
            letterSpacing: '-0.01em',
            fontFamily: "'Syne', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          }}
        >
          Yangla Design{' '}
          <span className={variant === 'light' ? 'text-purple-300' : 'text-[#682A8F]'}>
            &
          </span>
        </span>

        {/* Orange Sub-bar with lines */}
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`h-[1px] w-3.5 ${
              variant === 'light' ? 'bg-amber-400/60' : 'bg-[#F57C00]'
            }`}
          />
          <span
            className={`font-sans font-black tracking-[0.18em] uppercase ${currentSize.sub} ${
              variant === 'light' ? 'text-amber-300' : 'text-[#F57C00]'
            }`}
          >
            Printing Hub
          </span>
          <span
            className={`h-[1px] w-3.5 ${
              variant === 'light' ? 'bg-amber-400/60' : 'bg-[#F57C00]'
            }`}
          />
        </div>
      </div>
    </div>
  );
};
