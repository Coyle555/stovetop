"use client"


import { useState } from "react";


export default function Home() {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
  };

  const subtract = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="bg-black-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={subtract}
            className="bg-red-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl"
          >
            -
          </button>
          <div className="text-4xl font-bold">{number}</div>
          <button
            onClick={add}
            className="bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}



