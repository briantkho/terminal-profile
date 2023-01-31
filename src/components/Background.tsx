import React from 'react';
import vector1 from '../assets/Vector 1.svg';
import vector2 from '../assets/Vector 2.svg';
import vector3 from '../assets/Vector 3.svg';
import vector4 from '../assets/Vector 4.svg';

export const Background = () => {
  return (
    <div className="absolute w-screen h-screen overflow-hidden saturate-150">
      <div className="bg-[#00000025] absolute w-screen h-screen z-40 bg-blend-overlay"></div>
      <div className="bg-[#9ABDB2] w-screen h-screen bg-blend-overlay absolute"></div>
      <img
        src={vector1}
        alt="vector1"
        className="absolute bg-blend-overlay w-screen h-screen animate-idle"
      />
      <img
        src={vector2}
        alt="vector2"
        className="absolute bg-blend-overlay w-screen h-screen animate-idle"
      />
      <img
        src={vector3}
        alt="vector3"
        className="absolute bg-blend-overlay w-screen h-screen animate-idle"
      />
      <img
        src={vector4}
        alt="vector4"
        className="absolute bg-blend-overlay w-screen h-screen animate-idle"
      />
    </div>
  );
};
