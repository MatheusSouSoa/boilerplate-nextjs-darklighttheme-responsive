import React, { ReactNode } from "react";
import { useModal } from "@/context/ModalContext";
import { useTheme } from "@/context/ThemeProvider";

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  const { closeModal, isModalOpen } = useModal();
  const modalClasses = isModalOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";
  const { theme } = useTheme();

  return (
    <div className={modalClasses}>
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black opacity-50"
      ></div>
      <div
        className={`${
          theme == "dark"
            ? "bg-zinc-700 text-white  shadow-slate-600"
            : "bg-white text-black"
        } p-1 w-11/12 md:max-w-md mx-auto rounded shadow-md z-50 overflow-y-auto max-h-5/6 scrollbar-custom`}
      >
        <div className="p-5 rounded-md text-blac text-left">{children}</div>
      </div>
    </div>
  );
};

export default ModalContainer;
