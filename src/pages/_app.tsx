import Header from "@/components/Header";
import PageContainer from "@/components/PageContainer";
import { MainMenu } from "@/components/MainMenu";
import { MenuProvider } from "@/context/MenuProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MainContainer from "@/components/MainContainer";
import { Modal } from "@nextui-org/react";
import { ModalProvider } from "@/context/ModalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MenuProvider>
        <ModalProvider>
          <MainContainer>
            <Modal>
              quero adicionar um component como modalContent aqui onde ele vai
              trazer tuod q vier do modal onde a pagina vai somente fornecer
              como quer entregar o modal, e aqui vai servir
            </Modal>
            <Head>
              <title>Rachão</title>
            </Head>
            <Header />
            <PageContainer>
              <MainMenu />
              <Component {...pageProps} />
            </PageContainer>
          </MainContainer>
        </ModalProvider>
      </MenuProvider>
    </ThemeProvider>
  );
}
