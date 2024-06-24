import { useState } from "react";
import styled from "styled-components";

export default function ElevatorButton({ index }: { index: number }) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => setIsClicked(!isClicked);

  return <Button $clicked={isClicked} onClick={handleClick}>{index + 1}</Button>;
}

const Button = styled.button<{ $clicked: boolean }>`
  width: 40px;
  height: 28px;
  border: 1px solid #ccc9c9a4;
  background-color: #fff;
  color: ${({ $clicked }) => $clicked ? "red" : "#000"};
  font-weight: ${({ $clicked }) => $clicked ? "900" : "400"};
  cursor: pointer;
`;
