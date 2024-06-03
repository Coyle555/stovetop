"use client"

import { useState } from 'react';

export default function Home() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setItem(e.target.value);
  };

  const handleAddItem = () => {
  if (item.trim())
    setItems([...items, item]);
    setItem('');
  };


 

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={item}
            onChange={handleInputChange}
            className="px-4 py-2 border text-black rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder='Yeet and skeet'
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul className="list-disc bg-transparent">
          {items.map((item, index) => (
            <li key={index} className="mt-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}