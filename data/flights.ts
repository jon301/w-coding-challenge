import { default as data } from './flights.json';

type Flight = {
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

type Airport = {
  name: string;
  city: string;
};

type Airline = {
  name: string;
};

type Flights = {
  data: readonly Flight[];
  included: Record<string, Airport | Airline>;
};

export const flights = data as Flights;
