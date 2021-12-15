import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { flights } from '../../data/flights';

export const MainPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coding Challenge</title>
        <meta name="description" content="Coding Challenge" />
      </Head>

      <main className="p-4">
        <pre>{JSON.stringify(flights, null, 2)}</pre>
      </main>
    </div>
  );
};
