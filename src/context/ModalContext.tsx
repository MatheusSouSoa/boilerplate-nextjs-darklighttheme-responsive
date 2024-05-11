// ModalContext.tsx

import ModalContainer from "@/components/_ui/ModalContainer";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const isModalOpen = isOpen;

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
      {isOpen && modalContent && (
        <ModalContainer>{modalContent}</ModalContainer>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
