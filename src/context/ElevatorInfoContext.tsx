import { Dispatch, FC, PropsWithChildren, createContext, useReducer } from "react";

interface MovingElevator {
  index: number;
  targetFloor: number;
}

interface ElevatorInfoState {
  freeElevators: Array<number>;
  movingElevators: Array<MovingElevator>;
}

type ElevatorAction =
  | { type: "TOGGLE_FREE_ELEVATOR_TO_MOVE"; payload: { targetFloor: number } }
  | { type: "TOGGLE_MOVING_ELEVATOR_TO_FREE"; payload: { index: number } };

type ElevatorInfoType = [ElevatorInfoState, Dispatch<ElevatorAction>];

export const ElevatorInfoContext = createContext<ElevatorInfoType>([
  {
    freeElevators: [],
    movingElevators: [],
  },
  () => {},
]);

const initialInfoState: ElevatorInfoState = {
  freeElevators: [2, 1, 0],
  movingElevators: [],
};

const elevatorReducer = (state: ElevatorInfoState, action: ElevatorAction): ElevatorInfoState => {
  const { freeElevators, movingElevators } = state;
  const { type, payload } = action;
  const newFreeElevators = [...freeElevators];
  const newMovingElevators = [...movingElevators];
  switch (type) {
    case "TOGGLE_FREE_ELEVATOR_TO_MOVE":
      const elevatorToMove = newFreeElevators.pop();

      if (elevatorToMove === undefined) return state;
      newMovingElevators.push({ index: elevatorToMove, targetFloor: payload.targetFloor });
      return { freeElevators: newFreeElevators, movingElevators: newMovingElevators };
    case "TOGGLE_MOVING_ELEVATOR_TO_FREE":
      const { index } = payload;
      const updatedMovingElevators = newMovingElevators.filter((elevator) => elevator.index !== index);

      newFreeElevators.push(index);
      return {
        freeElevators: newFreeElevators,
        movingElevators: updatedMovingElevators,
      };
    default:
      return state;
  }
};

export const ElevatorInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [infoState, dispatchInfoState] = useReducer(elevatorReducer, initialInfoState);

  return <ElevatorInfoContext.Provider value={[infoState, dispatchInfoState]}>{children}</ElevatorInfoContext.Provider>;
};
