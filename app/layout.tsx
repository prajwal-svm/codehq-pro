import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import 'fumadocs-ui/style.css';
import type { ReactNode } from 'react';
import './globals.css';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CodeHQ Pro',
  description: 'Technical Interview Preparation',
  icons: {
    icon: '/icon.svg',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider 
            theme={{
                enabled: true,
                attribute: 'class',
                defaultTheme: 'system',
                enableSystem: true,
            }}
        >
            {children}
        </RootProvider>
      </body>
    </html>
  );
}
