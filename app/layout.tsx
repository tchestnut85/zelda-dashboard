import type { Metadata } from 'next';
import { IM_Fell_English, IM_Fell_English_SC } from 'next/font/google';
import './globals.css';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './components/NavItem';

const fellEnglish = IM_Fell_English({
  variable: '--font-fell-english',
  weight: '400',
});
const fellEnglishSC = IM_Fell_English_SC({
  variable: '--font-fell-english-sc',
  weight: '400',
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
    <html lang="en" className={`${fellEnglish.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-warriors-green">
        <header
          className={`flex justify-around items-center py-2 mb-10 bg-twilight-green ${fellEnglishSC.variable}`}
        >
          <Link href="/">
            <Image
              src="/shield.png"
              alt="Hyrule Shield"
              width={100}
              height={50}
              loading="eager"
            />
          </Link>
          <h1 className="text-warriors-yellow text-4xl">
            Legend of Zelda Dashboard
          </h1>
          <NavigationMenu className="flex items-center rounded-xs">
            <NavigationMenuList className="flex gap-3">
              <NavItem href="/" label="Home" />
              <NavItem href="/heroes" label="Heroes" />
              <NavItem href="/villains" label="Villains" />
            </NavigationMenuList>
          </NavigationMenu>
        </header>
        {children}
      </body>
    </html>
  );
}
