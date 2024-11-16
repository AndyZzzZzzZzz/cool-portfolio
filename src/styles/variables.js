import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #090c10; /* Deep Black-Blue */
    --navy: #10151e; /* Dark Blue-Grey */
    --light-navy: #1a2433; /* Muted Steel Blue */
    --lightest-navy: #2b3a4a; /* Slightly Brighter Navy */
    --navy-shadow: rgba(9, 12, 16, 0.7); /* Dark Shadow */
    --dark-slate: #3a4d63; /* Charcoal Slate */
    --slate: #f5f8fa; /* Cool Slate Grey */
    --light-slate: #ffffff; /* Balanced Grey-Blue */
    --lightest-slate: #98a8b9; /* Light Muted Grey */
    --white: #ffffff; /* Off-White for Contrast */
    --green: #14e298; /* Neon Green */
    --green-tint: rgba(20, 226, 152, 0.15); /* Subtle Green Tint */
    --pink: #e056fd; /* Vibrant Purple-Pink */
    --blue: #3498db; /* Bright Neon Blue */

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
