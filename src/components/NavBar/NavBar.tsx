'use client';

import { useEffect, useState } from "react";
import { Logo } from "@components/Logo/Logo";
import { NavMenu } from "@components/NavMenu/NavMenu";
import menuIcon from "@assets/icons/menu.svg"
import Image from "next/image";

type NavBarType = "light" | "dark";

// TO DO: Use later
interface NavBarProps {
  color?: NavBarType;
  /** Will only be transparent when it's at the top of the page */
  transparent?: boolean;
}

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 0) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-screen ${isTransparent ? 'bg-opacity-90' : 'bg-neutral-900'} transition-all duration-300 ease-in-out`}
      >
        <div className={`container max-w-6xl mx-auto py-2 lg:py-6 px-4 flex justify-between items-center lg:items-start`}>
          <Logo />

          <button className="my-auto" onClick={() => setIsMenuOpen(true)}>
            <Image src={menuIcon} alt="menu icon" />
          </button>
        </div>
      </header>

      <div
        className={`
          ${isMenuOpen ? "top-0" : "-top-full"}
          fixed left-0 w-screen h-screen transition-all duration-700 ease-in-out overflow-hidden z-10`}
      >
        <NavMenu toggleMenu={setIsMenuOpen} />
      </div>
    </>
  );
};