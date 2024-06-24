import { MouseEvent, useContext, useEffect, useState } from "react";
import { ElevatorInfoContext } from "../context/ElevatorInfoContext";

export default function useElevatorButtonLogic({ index }: { index: number }) {
  const [{ movingElevators, isReady }, dispatchInfoState] = useContext(ElevatorInfoContext);
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
  }, [movingElevators]);

  return {
    isClicked,
    isReady,
    stackLength: movingElevators.length,
    handleClick,
  };
}
