"use client";

import { ReactNode } from "react";
import useDestinationsReducer from "./destinationsReducer";
import { DestinationsContext } from "./destinationsStore";

interface PropsInterface {
  children: ReactNode;
}

export default function DestinationsProvider({ children }: PropsInterface) {
  const value = useDestinationsReducer();

  return (
    <DestinationsContext.Provider value={value}>
      {children}
    </DestinationsContext.Provider>
  );
}
