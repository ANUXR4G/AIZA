"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import { Sora, Instrument_Serif } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const soraSans = Sora({
  variable: "--font-Sora",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  weight: '400',
  style: ['normal','italic'], 
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap', 
});


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2500)
      return () => clearTimeout(timer);
    }
  }, [isLoading])


  return (
    <html lang="en">
      <body
        className={`${soraSans.variable} ${instrument.variable} antialiased`}
      >
        <CustomCursor/>
        {isLoading && isHome ? <SplashScreen />
          :
          <>
            <header className="sticky top-0 lg:top-6 z-20">
              <Navbar />
            </header>
            <main className="min-h-[calc(100vh-546px)]">
              {children}
            </main>
            <Footer/>
          </>
        }
      </body>
    </html>
  );
}
