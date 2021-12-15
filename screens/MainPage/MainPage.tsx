import { NextPage } from 'next';
import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import { flights } from '../../data/flights';

function formatAirportName(name: string) {
  return name.substring(name.lastIndexOf('/') + 1);
}

export const MainPage: NextPage = () => {
  const [searchResults, setSearchResults] = useState(flights.data);
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');

  const onFromAirportChange = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setFromAirport(event.currentTarget.value);
  }, []);

  const onToAirportChange = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setToAirport(event.currentTarget.value);
  }, []);

  useEffect(() => {
    setSearchResults(() => {
      if (fromAirport !== '' || toAirport !== '') {
        return flights.data.filter((flight) => {
          return (
            formatAirportName(flight.departureAirport)
              .toLowerCase()
              .startsWith(fromAirport.toLowerCase()) &&
            formatAirportName(flight.arrivalAirport)
              .toLowerCase()
              .startsWith(toAirport.toLocaleLowerCase())
          );
        });
      }
      return flights.data;
    });
  }, [fromAirport, toAirport]);

  return (
    <div>
      <Head>
        <title>Coding Challenge</title>
        <meta name="description" content="Coding Challenge" />
      </Head>

      <main className="p-5">
        <h1 className="pb-5 text-lg font-medium leading-6 text-gray-900">
          Flights Search
        </h1>
        <div className="p-5 shadow sm:rounded-md sm:overflow-hidden bg-white mb-5">
          <div className="pb-2">
            <label
              htmlFor="fromAirport"
              className="block text-sm font-medium text-gray-700"
            >
              From Airport
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="fromAirport"
                id="fromAirport"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="e.g. CDG"
                value={fromAirport}
                onChange={onFromAirportChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="toAirport"
              className="block text-sm font-medium text-gray-700"
            >
              To Airport
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="toAirport"
                id="toAirport"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="e.g. JFK"
                value={toAirport}
                onChange={onToAirportChange}
              />
            </div>
          </div>
        </div>

        <div className="px-4 shadow sm:rounded-md sm:overflow-hidden bg-white">
          <ul role="list" className="divide-y divide-gray-200">
            {searchResults.map((flight) => (
              <li key={flight.id} className="py-4 cursor-pointer">
                <details>
                  <summary>
                    {flight.flightNumber} -{' '}
                    {formatAirportName(flight.departureAirport)} ➡️{' '}
                    {formatAirportName(flight.arrivalAirport)}
                  </summary>
                  <p>
                    <pre>{JSON.stringify(flight, null, 2)}</pre>
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};
