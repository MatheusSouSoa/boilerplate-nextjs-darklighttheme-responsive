import { useTheme } from "@/context/ThemeProvider";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });


const MainContainer = ({ children }: MainContainerProps) => {
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen ${theme !== 'light' ? 'bg-zinc-700 text-white' : 'bg-zinc-100 text-black'} ${inter.className} flex flex-col justify-center items-center overflow-y-hidden`}
      suppressHydrationWarning
    >
      {children}
    </main>
  );
};

export default MainContainer;
