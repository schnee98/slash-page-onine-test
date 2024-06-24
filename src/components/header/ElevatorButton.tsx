import { MouseEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ElevatorInfoContext } from "../../context/ElevatorInfoContext";

const getButtonColor = ($clicked: boolean, $stackLength: number) => {
  if ($stackLength === 0) return "#000";
  return $clicked ? "red" : "#000";
};

export default function ElevatorButton({ index }: { index: number }) {
  const [{ freeElevators, movingElevators }, dispatchInfoState] = useContext(ElevatorInfoContext);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const toggleFreeElevatorToMove = (targetFloor: number) =>
    dispatchInfoState({ type: "TOGGLE_FREE_ELEVATOR_TO_MOVE", payload: { targetFloor } });

  const handleClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    const movingElevator = movingElevators.find(({ targetFloor }) => targetFloor === index + 1);
    const targetFloor = Number(currentTarget.textContent);
    const newIsClicked = !isClicked;

    if (newIsClicked && !movingElevator) {
      setIsClicked(newIsClicked);
      toggleFreeElevatorToMove(targetFloor);
      return;
    }
  };

  useEffect(() => {
    const movingElevator = movingElevators.find(({ targetFloor }) => targetFloor === index + 1);

    if (!movingElevator) setIsClicked(false);
  }, [movingElevators])

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
