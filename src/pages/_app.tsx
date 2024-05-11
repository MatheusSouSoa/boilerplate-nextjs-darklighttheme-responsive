'use client'

import Header from "@/components/Header";
import PageContainer from "@/components/PageContainer"; 
import { MainMenu } from "@/components/MainMenu";
import { MenuProvider } from "@/context/MenuProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MainContainer from "@/components/MainCantainer";



export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider>
      <MenuProvider>
        <MainContainer>
          <Head>
            <title>Rachão</title>
          </Head>
          <Header />
          <PageContainer>
            <MainMenu />
            <Component {...pageProps} />
          </PageContainer>
        </MainContainer>
      </MenuProvider>
    </ThemeProvider>
  );
}
