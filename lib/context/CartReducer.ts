import { useCallback, useReducer } from "react";
import { TripInterface } from "lib/models/trip";
import { AdditionalInterface } from "lib/models/additionals";
import { DestinationInterface } from "lib/models/destinations";

interface AdditionalCartInterface {
  data: AdditionalInterface;
  amount: number;
}

type CartType = {
  people: number | null;
  trip: TripInterface;
  destinations: DestinationInterface[];
  additionals: AdditionalCartInterface[];
};

type ActionType =
  | { type: "SET_PEOPLE"; people: number }
  | { type: "SET_TRIP"; trip: TripInterface }
  | { type: "ADD_DESTINATION"; destination: DestinationInterface }
  | { type: "REMOVE_DESTINATION"; destination: DestinationInterface };

type ReducerType = {
  people: number | null;
  setPeople: (people: number) => void;
  trip: TripInterface;
  setTrip: (trip: TripInterface) => void;
  destinations: DestinationInterface[];
  addDestination: (destination: DestinationInterface) => void;
  removeDestination: (destination: DestinationInterface) => void;
  additionals: AdditionalCartInterface[];
};

const initialCartData: CartType = {
  people: null,
  trip: {} as TripInterface,
  destinations: [] as DestinationInterface[],
  additionals: [] as AdditionalCartInterface[],
};

export default function useCartReducer(): ReducerType {
  const reducer = (state: CartType, action: ActionType) => {
    switch (action.type) {
      case "SET_PEOPLE":
        return { ...state, people: action.people };

      case "SET_TRIP":
        return { ...state, trip: action.trip };

      case "ADD_DESTINATION":
        return {
          ...state,
          destinations: [...state.destinations, action.destination],
        };

      case "REMOVE_DESTINATION":
        let index = state.destinations.indexOf(action.destination);
        return {
          ...state,
          destinations: [...state.destinations.splice(index, 1)],
        };
    }
  };

  const [{ people, trip, destinations, additionals }, dispatch] = useReducer(
    reducer,
    initialCartData
  );

  const setPeople = useCallback((people: number) => {
    dispatch({ type: "SET_PEOPLE", people: people });
  }, []);

  const setTrip = useCallback((trip: TripInterface) => {
    dispatch({ type: "SET_TRIP", trip: trip });
  }, []);

  const addDestination = useCallback((destination: DestinationInterface) => {
    dispatch({ type: "ADD_DESTINATION", destination: destination });
  }, []);

  const removeDestination = useCallback((destination: DestinationInterface) => {
    dispatch({ type: "REMOVE_DESTINATION", destination: destination });
  }, []);

  return {
    people,
    setPeople,
    trip,
    setTrip,
    destinations,
    addDestination,
    removeDestination,
    additionals,
  };
}
