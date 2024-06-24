import { useContext, useState } from "react";
import styled from "styled-components";
import { ElevatorStackContext } from "../../context/ElevatorStack";

const getButtonColor = ($clicked: boolean, $stackLength: number) => {
  if ($stackLength === 0) return "#000";
  return $clicked ? "red" : "#000";
};

export default function ElevatorButton({ index }: { index: number }) {
  const [stack, setStack] = useContext(ElevatorStackContext);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    const newIsClicked = !isClicked;
    const newStack = [...stack];
    setIsClicked(newIsClicked);

    if (newIsClicked) {
      newStack.pop();
      setStack(newStack);
      return;
    }

    // 추후에 엘레베이터의 이동이 끝날 때 동작하도록 구현
    newStack.push(1);
    setStack(newStack);
  };

  return (
    <Button $clicked={isClicked} $stackLength={stack.length} disabled={stack.length === 0} onClick={handleClick}>
      {index + 1}
    </Button>
  );
}

const Button = styled.button<{ $clicked: boolean; $stackLength: number }>`
  width: 40px;
  height: 28px;
  border: 1px solid #ccc9c9a4;
  background-color: transparent;
  color: ${({ $clicked, $stackLength }) => getButtonColor($clicked, $stackLength)};
  font-weight: ${({ $clicked }) => ($clicked ? "900" : "400")};
  cursor: ${({ $stackLength }) => ($stackLength === 0 ? "default" : "pointer")};
`;
