import styled from "styled-components";
import ElevatorButton from "./ElevatorButton";
import { useContext } from "react";
import { ElevatorInfoContext } from "../../context/ElevatorStack";

const buttons = Array.from({ length: 15 });

export default function Header() {
  const [{ freeElevators: stack }] = useContext(ElevatorInfoContext);

  return (
    <Wrapper>
      <Description>호출</Description>
      <ButtonList stack={stack}>{buttons.map((_, index) => ElevatorButton({ index }))}</ButtonList>
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

const ButtonList = styled.div<{ stack: Array<number> }>`
  display: flex;
  border: 1px solid #ccc9c9a4;
  background-color: ${({ stack }) => (stack.length === 0 ? "gray" : "transparent")};
`;
