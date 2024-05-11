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

  const modalOverlayClasses = `
  fixed inset-0 bg-black transition-opacity duration-300 ${
    isModalOpen ? "opacity-50" : "opacity-0"
  } 
`;

  const modalContentClasses = `
  ${isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"} 
  transform transition-transform duration-300
  ${
    theme == "dark"
      ? "bg-zinc-700 text-white shadow-slate-600"
      : "bg-white text-black"
  } 
  p-4 md:p-8 w-11/12 md:max-w-md mx-auto rounded shadow-md z-50
`;

  return (
    <div className={modalClasses}>
      <div
        onClick={closeModal}
        className={modalOverlayClasses}
        style={{ visibility: isModalOpen ? "visible" : "hidden" }}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={modalContentClasses+  `transition-opacity`}
        style={{ visibility: isModalOpen ? "visible" : "hidden" }}
      >
        <div className="p-5 rounded-md text-blac text-left">{children}</div>
      </div>
    </div>
  );
};

export default ModalContainer;
