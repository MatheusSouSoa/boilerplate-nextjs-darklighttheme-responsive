import { BtnMinimalist } from "@/components/_ui/Buttons";
import ComponentContainer from "@/components/_ui/ComponentContainer";
import ContentContainer from "@/components/_ui/ContentContainer";
import { DisplayFlex } from "@/components/_ui/DisplayFlex";
import { useModal } from "@/context/ModalContext";


export default function ModalPage () {

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
        <div className="flex justify-center items-center pt-5">
          <BtnMinimalist onClick={closeModal}>
            <span className="">Ok</span>
          </BtnMinimalist>
        </div>
      </div>
    );
    openModal(content);
  };

  return (
    <ComponentContainer>
      <ContentContainer height="">
        <DisplayFlex
          justifyContent="center"
          flexDirection="row"
          alignItems="center"
          gap={50}
        >
          <BtnMinimalist onClick={handleOpenModal}>Clique para abri modal</BtnMinimalist>
        </DisplayFlex>
      </ContentContainer>
    </ComponentContainer>
  )
}