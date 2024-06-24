import styled from "styled-components";
import ElevatorButton from "./ElevatorButton";
import { useContext } from "react";
import { ElevatorInfoContext } from "../../context/ElevatorInfoContext";

const buttons = Array.from({ length: 15 }).map((_, index) => <ElevatorButton index={index} />);

export default function Header() {
  const [{ freeElevators: stack }] = useContext(ElevatorInfoContext);

  return (
    <Wrapper>
      <Description>호출</Description>
      <ButtonList stack={stack}>{buttons}</ButtonList>
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
