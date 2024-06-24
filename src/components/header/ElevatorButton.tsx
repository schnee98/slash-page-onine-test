import { useContext, useState } from "react";
import styled from "styled-components";
import { ElevatorInfoContext } from "../../context/ElevatorStack";

const getButtonColor = ($clicked: boolean, $stackLength: number) => {
  if ($stackLength === 0) return "#000";
  return $clicked ? "red" : "#000";
};

export default function ElevatorButton({ index }: { index: number }) {
  const [{ freeElevators }, dispatchInfoState] = useContext(ElevatorInfoContext);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const addFreeElevator = (newFreeElevator: number) =>
    dispatchInfoState({ type: "ADD_FREE_ELEVATOR", payload: { index: newFreeElevator } });

  const popFreeElevator = () => dispatchInfoState({ type: "REMOVE_FREE_ELEVATOR" });

  const handleClick = () => {
    const newIsClicked = !isClicked;
    setIsClicked(newIsClicked);

    if (newIsClicked) {
      popFreeElevator();
      return;
    }

    // 추후에 엘레베이터의 이동이 끝날 때 동작하도록 구현
    addFreeElevator(1);
  };

  return (
    <Button
      $clicked={isClicked}
      $stackLength={freeElevators.length}
      disabled={freeElevators.length === 0}
      onClick={handleClick}
    >
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
