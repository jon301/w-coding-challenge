import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

export const MainPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coding Challenge</title>
        <meta name="description" content="Coding Challenge" />
      </Head>

      <main>Coding Challenge</main>
    </div>
  );
};
