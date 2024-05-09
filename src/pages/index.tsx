'use client'
import { HomeComponent } from "@/components/home/Home-Component";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function Home() {
  return (
      <main
        className={ cn(
          "min-h-screen bg-background font-sans antialiased w-full ",
          inter.variable
        )}
        suppressHydrationWarning
      >
        <HomeComponent />
      </main>
  )
}
