import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import { MainMenu } from "@/components/MainMenu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
    className={`min-h-screen bg-zinc-100 ${inter.className} flex flex-col justify-center items-center overflow-y-hidden`}
   >
      <Header />
      <MainContainer>
        <MainMenu/>
        <Component {...pageProps} />  
      </MainContainer>
    </main>
  );
}
