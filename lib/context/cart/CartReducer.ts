"use client";

import { useCallback, useReducer } from "react";
import { TripInterface } from "lib/models/trip";
import { AdditionalInterface } from "lib/models/additionals";
import { DestinationInterface } from "lib/models/destinations";

export interface AdditionalCartInterface {
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
  | { type: "REMOVE_DESTINATION"; destination: DestinationInterface }
  | { type: "ADD_ADDITIONAL"; additional: AdditionalInterface }
  | { type: "REMOVE_ADDITIONAL"; additional: AdditionalInterface }
  | { type: "INCREASE_ADDITIONAL"; additional: AdditionalInterface }
  | { type: "DECREASE_ADDITIONAL"; additional: AdditionalInterface };

type ReducerType = {
  people: number | null;
  setPeople: (people: number) => void;
  trip: TripInterface;
  setTrip: (trip: TripInterface) => void;
  destinations: DestinationInterface[];
  addDestination: (destination: DestinationInterface) => void;
  removeDestination: (destination: DestinationInterface) => void;
  additionals: AdditionalCartInterface[];
  addAdditional: (additional: AdditionalInterface) => void;
  removeAdditional: (additional: AdditionalInterface) => void;
  increaseAdditional: (additional: AdditionalInterface) => void;
  decreaseAdditional: (additional: AdditionalInterface) => void;
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
        const deletedDestinations: DestinationInterface[] =
          state.destinations.filter(
            (destination) => destination.title != action.destination.title
          );

        return { ...state, destinations: deletedDestinations };

      case "ADD_ADDITIONAL":
        return {
          ...state,
          additionals: [
            ...state.additionals,
            { data: action.additional, amount: 1 },
          ],
        };

      case "REMOVE_ADDITIONAL":
        const deletedAdditionals: AdditionalCartInterface[] =
          state.additionals.filter(
            (additional) => additional.data.item != action.additional.item
          );

        return { ...state, additionals: deletedAdditionals };

      case "INCREASE_ADDITIONAL":
        const increasedAdditionals: AdditionalCartInterface[] =
          state.additionals.map((additional) => {
            if (additional.data.item == action.additional.item) {
              return { ...additional, amount: additional.amount++ };
            }
            return additional;
          });

        return { ...state, additionals: increasedAdditionals };

      case "DECREASE_ADDITIONAL":
        const decreasedAdditionals: AdditionalCartInterface[] =
          state.additionals.map((additional, index) => {
            if (additional.data.item == action.additional.item) {
              if (additional.amount <= 1) {
                state.additionals.splice(index, 1);
              } else {
                return { ...additional, amount: additional.amount-- };
              }
            }
            return additional;
          });

        return { ...state, additionals: decreasedAdditionals };
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

  const addAdditional = useCallback((additional: AdditionalInterface) => {
    dispatch({ type: "ADD_ADDITIONAL", additional: additional });
  }, []);

  const removeAdditional = useCallback((additional: AdditionalInterface) => {
    dispatch({ type: "REMOVE_ADDITIONAL", additional: additional });
  }, []);

  const increaseAdditional = useCallback((additional: AdditionalInterface) => {
    dispatch({ type: "INCREASE_ADDITIONAL", additional: additional });
  }, []);

  const decreaseAdditional = useCallback((additional: AdditionalInterface) => {
    dispatch({ type: "DECREASE_ADDITIONAL", additional: additional });
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
    addAdditional,
    removeAdditional,
    increaseAdditional,
    decreaseAdditional,
  };
}
