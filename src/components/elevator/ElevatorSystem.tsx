import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ElevatorInfoContext } from '../../context/ElevatorInfoContext';

const MAX_WIDTH = 60;
const MAX_HEIGHT = 630;
const BUTTON_HEIGHT = 42;

export default function ElevatorSystem({ index: elevatorIndex }: { index: number }) {
  const [{ movingElevators }, dispatchInfoState] = useContext(ElevatorInfoContext);
  const [floor, setFloor] = useState(1);

  const toggleMovingElevatorToFree = (index: number) =>
    dispatchInfoState({ type: "TOGGLE_MOVING_ELEVATOR_TO_FREE", payload: { index } });

  const increaseFloor = () => setFloor(floor + 1);
  const decreaseFloor = () => setFloor(floor - 1);

  useEffect(() => {
    const movingElevator = movingElevators.find(({ index: movingElevatorIndex }) => movingElevatorIndex === elevatorIndex);

    if (!movingElevator) return;

    const { targetFloor } = movingElevator;

    if (targetFloor === floor) {
      toggleMovingElevatorToFree(elevatorIndex);
      return;
    }

    if (targetFloor > floor) setTimeout(increaseFloor, 1000);
    if (targetFloor < floor) setTimeout(decreaseFloor, 1000);
  }, [floor, movingElevators]);

  return (
    <Wrapper>
      <Elevator floor={floor}>{floor}</Elevator>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${MAX_WIDTH}px;
  height: ${MAX_HEIGHT}px;
  border: 2px solid #ccc9c9a4;
  position: relative;
`;

const Elevator = styled.div<{ floor: number }>`
  position: absolute;
  width: ${MAX_WIDTH - 8}px;
  height: ${BUTTON_HEIGHT - 2}px;
  top: ${({ floor }) => MAX_HEIGHT - floor * BUTTON_HEIGHT}px;
  left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid gray;
  color: gray;
  font-weight: 700;
`;
