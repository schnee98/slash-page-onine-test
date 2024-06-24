import { Dispatch, FC, PropsWithChildren, createContext, useReducer } from "react";

interface FreeElevator {
  index: number;
  currentFloor: number;
}

interface MovingElevator {
  index: number;
  targetFloor: number;
}

interface ElevatorInfoState {
  freeElevators: Array<number>;
  movingElevators: Array<MovingElevator>;
  currentFloor: number;
  isReady: boolean;
}

type ElevatorAction =
  | { type: "TOGGLE_FREE_ELEVATOR_TO_MOVE"; payload: { targetFloor: number } }
  | { type: "TOGGLE_MOVING_ELEVATOR_TO_FREE"; payload: { index: number } }
  | { type: "SET_READY"; payload: {} }
  | { type: "SET_CURRENT_FLOOR"; payload: { currentFloor: number } };

type ElevatorInfoType = [ElevatorInfoState, Dispatch<ElevatorAction>];

export const ElevatorInfoContext = createContext<ElevatorInfoType>([
  {
    freeElevators: [],
    movingElevators: [],
    currentFloor: 1,
    isReady: false,
  },
  () => {},
]);

const initialInfoState: ElevatorInfoState = {
  freeElevators: [2, 1, 0],
  movingElevators: [],
  currentFloor: 1,
  isReady: false,
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
      return { ...state, freeElevators: newFreeElevators, movingElevators: newMovingElevators };
    case "TOGGLE_MOVING_ELEVATOR_TO_FREE":
      const { index } = payload;
      const updatedMovingElevators = newMovingElevators.filter((elevator) => elevator.index !== index);
      const newCurrentFloor = newMovingElevators.find((elevator) => elevator.index === index);

      newFreeElevators.push(index);
      return {
        ...state,
        freeElevators: newFreeElevators,
        movingElevators: updatedMovingElevators,
        currentFloor: newCurrentFloor?.targetFloor || 1,
        isReady: false,
      };
    case "SET_READY":
      return {
        ...state,
        isReady: true,
      };
    case "SET_CURRENT_FLOOR":
      const { currentFloor } = payload;
      return {
        ...state,
        currentFloor,
      };
    default:
      return state;
  }
};

export const ElevatorInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [infoState, dispatchInfoState] = useReducer(elevatorReducer, initialInfoState);

  return <ElevatorInfoContext.Provider value={[infoState, dispatchInfoState]}>{children}</ElevatorInfoContext.Provider>;
};
