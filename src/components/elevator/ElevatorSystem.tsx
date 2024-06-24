import styled from "styled-components";
import useElevatorSystemLogic from "../../logics/useElevatorSystemLogic";

const MAX_WIDTH = 60;
const MAX_HEIGHT = 630;
const BUTTON_HEIGHT = 42;

export default function ElevatorSystem(props: { index: number }) {
  const { floor, isMoving } = useElevatorSystemLogic(props);

  return (
    <Wrapper>
      <Elevator floor={floor} isMoving={isMoving}>{floor}</Elevator>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${MAX_WIDTH}px;
  height: ${MAX_HEIGHT}px;
  border: 2px solid #ccc9c9a4;
  position: relative;
`;

const Elevator = styled.div<{ floor: number, isMoving: boolean }>`
width: ${MAX_WIDTH - 8}px;
  height: ${BUTTON_HEIGHT - 2}px;
  top: ${({ floor }) => MAX_HEIGHT - floor * BUTTON_HEIGHT}px;
  outline: ${({ isMoving }) => isMoving ? "2px solid red" : "2px solid gray"};
  color: ${({ isMoving }) => isMoving ? "red" : "gray"};

  position: absolute;
  left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
