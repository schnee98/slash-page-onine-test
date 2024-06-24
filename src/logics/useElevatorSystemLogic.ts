import { useContext, useEffect, useState } from "react";
import { ElevatorInfoContext } from "../context/ElevatorInfoContext";

export default function useElevatorSystemLogic({ index: elevatorIndex }: { index: number }) {
  const [{ movingElevators }, dispatchInfoState] = useContext(ElevatorInfoContext);
  const [floor, setFloor] = useState(1);

  const toggleMovingElevatorToFree = (index: number) =>
    dispatchInfoState({ type: "TOGGLE_MOVING_ELEVATOR_TO_FREE", payload: { index } });

  const increaseFloor = () => setFloor(floor + 1);
  const decreaseFloor = () => setFloor(floor - 1);

  useEffect(() => {
    const movingElevator = movingElevators.find(
      ({ index: movingElevatorIndex }) => movingElevatorIndex === elevatorIndex
    );

    if (!movingElevator) return;

    const { targetFloor } = movingElevator;

    if (targetFloor === floor) {
      toggleMovingElevatorToFree(elevatorIndex);
      return;
    }

    if (targetFloor > floor) setTimeout(increaseFloor, 1000);
    if (targetFloor < floor) setTimeout(decreaseFloor, 1000);
  }, [floor, movingElevators]);

  return {
    floor,
  };
}
