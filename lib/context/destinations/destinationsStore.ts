"use client";

import { createContext, useContext } from "react";
import useDestinationsReducer from "./destinationsReducer";

type ContextType = ReturnType<typeof useDestinationsReducer>;
const initialContext = {} as unknown as ContextType;

export const DestinationsContext = createContext<ContextType>(initialContext);
export const useDestinationContext = () => useContext(DestinationsContext);
