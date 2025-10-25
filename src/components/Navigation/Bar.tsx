import { useState } from "react";
import NavButton from "./NavButton";

export default function Bar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsBurgerOpen((prev) => {
      return !prev;
    });
  };
  return (
    <div className="block sm:hidden">
      {!isBurgerOpen && <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        onClick={handleClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>}
      {isBurgerOpen && 
      <div 
      className="fixed top-0 left-0 flex flex-col items-center justify-center text-3xl gap-10 w-full h-full bg-bg dark:bg-bg-dark z-2"
      onClick={handleClick}
      >
            <NavButton section={'about'}>About</NavButton>
            <NavButton section={'skills'}>Skills</NavButton>
            <NavButton section={'portfolio'}>Portfolio</NavButton>
            <NavButton section={'contacts'}>Contacts</NavButton>
        </div>
      }
    </div>
  );
}
