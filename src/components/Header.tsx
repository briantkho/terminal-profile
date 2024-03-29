import { IoMdClose } from 'react-icons/io';
import { BiExpandAlt, BiMinus } from 'react-icons/bi';

export const Header = () => {
  const closeHandler = () => {
    if (window.confirm('Are you sure you want to leave this website?')) {
      window.close();
    }
  };

  const expandHandler = () => {};

  return (
    <div className="bg-gray py-2 h-10 pl-3 w-full rounded-t-2xl flex align-middle">
      <div className="flex gap-2 items-center mr-auto">
        <div
          className="h-4 w-4 rounded-full bg-red flex items-center justify-center cursor-pointer"
          id="parentButtons"
          onClick={closeHandler}
        >
          <IoMdClose className="opacity-50 text-xs childButton h-4 w-4 rounded-full bg-red" />
        </div>
        <div
          className="h-4 w-4 rounded-full bg-yellow flex items-center justify-center cursor-pointer"
          id="parentButtons"
        >
          <BiMinus className="opacity-50 text-sm childButton" />
        </div>
        <div
          className="h-4 w-4 rounded-full bg-green flex items-center justify-center cursor-pointer"
          id="parentButtons"
          onClick={expandHandler}
        >
          <BiExpandAlt className="opacity-50 text-xs childButton" />
        </div>
      </div>
    </div>
  );
};
