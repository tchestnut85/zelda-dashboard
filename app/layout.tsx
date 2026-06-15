import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

const geistMonoHeading = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-heading',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Legend of Zelda Dashboard',
  description: 'A Legend of Zelda dashboard made with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable,
        geistMonoHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-primary-color">
        <header className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/shield.png"
              alt="Hyrule Shield"
              width={100}
              height={50}
              loading="eager"
            />
          </Link>
          <h1 className="text-secondary-color text-4xl">
            Legend of Zelda Dashboard
          </h1>
          <nav>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
