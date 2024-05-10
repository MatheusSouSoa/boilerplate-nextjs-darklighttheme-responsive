import ProfilePictureMenu from "@/components/_ui/ProfilePictureMenu";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import { MainMenu } from "@/components/MainMenu";
import { MenuProvider } from "@/context/MenuContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <main
        className={`min-h-screen bg-zinc-100 ${inter.className} flex flex-col justify-center items-center overflow-y-hidden`}
      >
        <Head>
          <title>Rachão</title>
        </Head>
        <Header />
        <MainContainer>
          <MainMenu />
          <Component {...pageProps} />
        </MainContainer>
      </main>
    </MenuProvider>
  );
}
