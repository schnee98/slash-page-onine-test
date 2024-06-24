import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from "react";

interface ElevatorStackState {
  stack: Array<number>;
}

type ElevatorStackType = [ElevatorStackState, Dispatch<SetStateAction<ElevatorStackState>>];

export const ElevatorStackContext = createContext<ElevatorStackType>([{ stack: [] }, () => {}]);

const initialStackState: ElevatorStackState = {
  stack: [2, 1, 0],
};

export const ElevatorStackProvider: FC<PropsWithChildren> = ({ children }) => {
  const [stackState, setStackState] = useState<ElevatorStackState>(initialStackState);

  return <ElevatorStackContext.Provider value={[stackState, setStackState]}>{children}</ElevatorStackContext.Provider>;
};
