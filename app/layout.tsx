import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Mohamed Solaiman | Full-Stack Developer',
  description: 'Portfolio of Mohamed Solaiman, Full-Stack Developer based in Latakia, Syria.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-[#f5f5f5] font-sans selection:bg-zinc-800 selection:text-zinc-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
