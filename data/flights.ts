import { default as data } from './flights.json';

export type Flight = {
  id: string;
  flightNumber: string;
  airline: string;
  takeoff: string;
  landing: string;
  duration: number;
  price: number;
  currencyCode: string;
  departureAirport: string;
  arrivalAirport: string;
};

export type Airport = {
  name: string;
  city: string;
};

export type Airline = {
  name: string;
};

export type Flights = {
  data: readonly Flight[];
  included: Record<string, Airport | Airline>;
};

export const flights = data as Flights;
