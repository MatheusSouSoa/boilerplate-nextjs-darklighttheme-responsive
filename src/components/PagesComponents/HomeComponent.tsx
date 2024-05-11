import { useMenuContext } from "@/context/MenuProvider";
import { useModal } from "@/context/ModalContext";
import { useTheme } from "@/context/ThemeProvider";
import { BtnMinimalist } from "../_ui/Buttons";

const HomeComponent = () => {
  const { isMenuOpen } = useMenuContext();

  const { theme } = useTheme();
  const { openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    const content = (
      <div className="  w-full flex flex-col justify-center items-center">
        <h2>Conteúdo do Modal</h2>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <p>Este é o conteúdo do seu modal.</p>
        <div className='flex justify-center items-center pt-5'>
            <BtnMinimalist onClick={closeModal}>
              <span className="">Ok</span>
            </BtnMinimalist>
          </div>
      </div>
    );
    openModal(content);
  };

  return (
    <div
      className={`calc-c-header w-4/5 xl:w-4/5 shadow-md overflow-y-auto ${
        isMenuOpen && "hidden sm:block"
      }`}
    >
      <div className="w-full h-full p-3">
        {/* <div className="w-full h-[5000px] bg-red-500 "> */}
        <h1>Hello world</h1>
        <p>This is my first Next.js app {theme}</p>
        <div>
          <button onClick={handleOpenModal}>Abrir Modal</button>
        </div>
      </div>
    </div>
  );
};

export { HomeComponent };
