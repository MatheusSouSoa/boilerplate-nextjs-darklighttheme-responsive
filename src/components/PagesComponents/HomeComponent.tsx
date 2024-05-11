import { useModal } from "@/context/ModalContext";
import { BtnMinimalist, BtnPrimary } from "../_ui/Buttons";
import ContentContainer from "../_ui/ContentContainer";
import Select from "../_ui/Select";
import ComponentContainer from "../_ui/ComponentContainer";
import { useState } from "react";
import { DefaultInput } from "../_ui/Inputs";
import { DisplayFlex } from "../_ui/DisplayFlex";

const HomeComponent = () => {
  const [input, setInput] = useState<string>("");
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [input3, setInput3] = useState<string>("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };
  const handleInputChange1 = (e: any) => {
    setInput1(e.target.value);
  };
  const handleInputChange2 = (e: any) => {
    setInput2(e.target.value);
  };

  const handleInputChange3 = (e: any) => {
    setInput3(e.target.value);
  };

  return (
    <ComponentContainer>
      <DisplayFlex gap={10}>
        <ContentContainer height="50%">
          <DisplayFlex
            justifyContent="center"
            flexDirection="column"
            gap={50}
          >
            <Select
              onChange={handleInputChange3}
              value={input3}
            >
              <option value={'-'}>-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
            <DefaultInput
              placeholder="Digite algo..."
              onChange={handleInputChange}
              value={input}
              type="text"
            />
            <DefaultInput
              placeholder="Digite algo..."
              onChange={handleInputChange1}
              value={input1}
              type="text"
            />
            <DefaultInput
              placeholder="Digite algo..."
              onChange={handleInputChange2}
              value={input2}
              type="text"
            />
          </DisplayFlex>
        </ContentContainer>
        <ContentContainer height="50%">
          <DisplayFlex
            justifyContent="center"
            flexDirection="row"
            alignItems="center"
            gap={50}
          >
            <BtnPrimary onClick={() => {}}>Prima</BtnPrimary>
            <BtnMinimalist onClick={() => {}}>Minimalista</BtnMinimalist>
          </DisplayFlex>
        </ContentContainer>
      </DisplayFlex>
    </ComponentContainer>
  );
};

export { HomeComponent };
