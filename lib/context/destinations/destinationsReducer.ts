"use client";

import { DestinationInterface } from "lib/models/destinations";
import { useCallback, useReducer } from "react";

type StateType = {
  isShowedDetail: boolean;
  destination: DestinationInterface;
};

type ActionType =
  | { type: "SHOW_DETAIL"; destination: DestinationInterface }
  | { type: "DISMISS_DETAIL" };

type ReducerType = {
  isShowedDetail: boolean;
  destination: DestinationInterface;
  showDetail: (destination: DestinationInterface) => void;
  dismissDetail: () => void;
};

const initialData: StateType = {
  isShowedDetail: false,
  destination: {} as DestinationInterface,
};

export default function useDestinationsReducer(): ReducerType {
  const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case "SHOW_DETAIL":
        return {
          destination: action.destination,
          isShowedDetail: true,
        };

      case "DISMISS_DETAIL":
        return {
          ...state,
          isShowedDetail: false,
        };
    }
  };

  const [{ isShowedDetail, destination }, dispatch] = useReducer(
    reducer,
    initialData
  );

  const showDetail = useCallback((destination: DestinationInterface) => {
    dispatch({ type: "SHOW_DETAIL", destination: destination });
  }, []);

  const dismissDetail = useCallback(() => {
    dispatch({ type: "DISMISS_DETAIL" });
  }, []);

  return { isShowedDetail, destination, showDetail, dismissDetail };
}
