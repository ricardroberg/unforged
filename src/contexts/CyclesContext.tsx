import { differenceInSeconds } from "date-fns";
import {
  createContext,
  ReactNode,
  useState,
  useReducer,
  useEffect,
} from "react";

interface Cycle {
  id: string;
  name: string;
}

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles?: Cycle[];
  amountSecondsPassed?: number;
  activeCycleId?: string | null;
  activeCycle?: Cycle | undefined;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  return <CyclesContext.Provider value={{}}>{children}</CyclesContext.Provider>;
}
