import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { flights } from '../../data/flights';

export const MainPage: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Coding Challenge</title>
        <meta name="description" content="Coding Challenge" />
      </Head>

      <main className="p-5">
        <h1 className="pb-5 text-lg font-medium leading-6 text-gray-900">
          Flights Search
        </h1>
        <div className="p-5 shadow sm:rounded-md sm:overflow-hidden bg-white mb-5">
          <div className="py-2">
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
              />
            </div>
          </div>
          <div className="py-2">
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
              />
            </div>
          </div>
        </div>

        <div className="p-5 shadow sm:rounded-md sm:overflow-hidden bg-white">
          <pre>{JSON.stringify(flights, null, 2)}</pre>
        </div>
      </main>
    </div>
  );
};
