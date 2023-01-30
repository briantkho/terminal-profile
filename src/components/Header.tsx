import React from 'react';

export const Header = () => {
  return (
    <div className="bg-gray py-2 pl-3 w-full rounded-t-2xl flex align-middle">
      <div className="flex gap-2 items-center mr-auto">
        <svg height={15} width={15}>
          <circle cx="7.5" cy="7.5" r="7.5" className="fill-red" />
        </svg>
        <svg height={15} width={15}>
          <circle cx="7.5" cy="7.5" r="7.5" className="fill-yellow" />
        </svg>
        <svg height={15} width={15}>
          <circle cx="7.5" cy="7.5" r="7.5" className="fill-green" />
        </svg>
      </div>
    </div>
  );
};
