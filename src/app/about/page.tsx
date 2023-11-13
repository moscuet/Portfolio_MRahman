import { Button } from '@mui/material';
import Head from 'next/head';
import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col bg-gray-200">
      <Head>
        <title>About - Mostafizur Rahman</title>
      </Head>

      <div className=" min-h-screen flex-grow flex flex-col justify-center items-center p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-10">
          Hi, I am Rahman
        </h1>
        <p className="text-base md:text-xl lg:text-xl text-gray-800 text-center mt-4 px-20">
          A Full-Stack Developer in Helsinki, creating seamless web experiences where technology meets user needs.
        </p>
        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold my-6 py-2 px-4 rounded">
          <span className="animated-light-gradient-text">More about me</span>
        </Button>
      </div>

      <div className="scroll-downs">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
    </div>
  );
}
