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
  | { type: "ADD_FREE_ELEVATOR"; payload: { index: number } }
  | { type: "REMOVE_FREE_ELEVATOR" }
  | { type: "ADD_MOVING_ELEVATOR"; payload: { movingElevator: MovingElevator } }
  | { type: "REMOVE_MOVING_ELEVATOR"; payload: { index: number } };

type ElevatorInfoType = [ElevatorInfoState, Dispatch<ElevatorAction>];

export const ElevatorInfoContext = createContext<ElevatorInfoType>([
  {
    freeElevators: [],
    movingElevators: [],
  },
  () => {},
]);

const initialInfoState = {
  freeElevators: [2, 1, 0],
  movingElevators: [],
};

const elevatorReducer = (state: ElevatorInfoState, action: ElevatorAction) => {
  const { freeElevators, movingElevators } = state;
  const { type } = action;
  const newFreeElevators = [...freeElevators];
  const newMovingElevators = [...movingElevators];
  switch (type) {
    case "ADD_FREE_ELEVATOR":
      return {
        ...state,
        freeElevators: [...freeElevators, action.payload.index],
      };
    case "REMOVE_FREE_ELEVATOR":
      newFreeElevators.pop();
      return { ...state, freeElevators: newFreeElevators };
    case "ADD_MOVING_ELEVATOR":
      newMovingElevators.push(action.payload.movingElevator);
      return {
        ...state,
        movingElevators: newMovingElevators,
      };
    case "REMOVE_MOVING_ELEVATOR":
      newMovingElevators.pop();
      return {
        ...state,
        movingElevators: newMovingElevators,
      };
    default:
      return state;
  }
};

export const ElevatorInfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [infoState, dispatchInfoState] = useReducer(elevatorReducer, initialInfoState);

  return <ElevatorInfoContext.Provider value={[infoState, dispatchInfoState]}>{children}</ElevatorInfoContext.Provider>;
};
