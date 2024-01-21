'use client';
import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * Your app's theme provider component.
 * 'use client' is essential for next-themes to work with app-dir.
 */
const ThemeProvider = ({ children, ...props }: any) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
export default ThemeProvider;
