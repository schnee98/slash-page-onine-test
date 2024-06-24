import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from "react";

type ElevatorStackType = [Array<number>, Dispatch<SetStateAction<Array<number>>>];

export const ElevatorStackContext = createContext<ElevatorStackType>([[], () => {}]);

const initialStackState = [2, 1, 0];

export const ElevatorStackProvider: FC<PropsWithChildren> = ({ children }) => {
  const [stackState, setStackState] = useState<Array<number>>(initialStackState);

  return <ElevatorStackContext.Provider value={[stackState, setStackState]}>{children}</ElevatorStackContext.Provider>;
};
