import styled from "styled-components";
import ElevatorButton from "./ElevatorButton";

const buttons = Array.from({ length: 15 });

export default function Header() {
  return (
    <Wrapper>
      <Description>호출</Description>
      <ButtonList>{buttons.map((_, index) => ElevatorButton({ index }))}</ButtonList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Description = styled.span`
  font-weight: 700;
`;

const ButtonList = styled.div`
  display: flex;
  border: 1px solid #ccc9c9a4;
`;
