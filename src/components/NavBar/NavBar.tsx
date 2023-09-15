'use client';

import { useState } from "react";
import { Logo } from "@components/Logo/Logo";
import { NavMenu } from "@components/NavMenu/NavMenu";

type NavBarSize = "mobile" | "desktop";
type NavBarType = "light" | "dark";

interface NavBarProps {
  color?: NavBarType;
  size?: NavBarSize;
  /** Will only be transparent when it's at the top of the page */
  transparent?: boolean;
}

const getLogo = (size: NavBarSize, color: NavBarType) => {
  // const sizeLogo = size == "desktop" ? "default" : "small";
  const sizeLogo = "small";
  const colorLogo = color == "dark" ? "white" : "default";
  return <Logo size={sizeLogo} color={colorLogo} />;
};

export const NavBar = ({
  color = "dark",
  size = "desktop",
  transparent = false,
}: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-screen">
        <div className="container max-w-6xl mx-auto py-6 px-4 flex justify-between items-center lg:items-start">
          <section className="inline-flex lg:hidden flex-col items-center">
            {getLogo("mobile", color)}
          </section>

          <section className="hidden lg:inline-flex flex-col items-center">
            {getLogo("desktop", color)}
          </section>

          <button className="my-auto" onClick={() => setIsMenuOpen(true)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.20618 6C2.20618 5.44772 2.64916 5 3.19561 5H21.0054C21.5518 5 21.9948 5.44772 21.9948 6C21.9948 6.55228 21.5518 7 21.0054 7H3.19561C2.64916 7 2.20618 6.55228 2.20618 6ZM2.20618 12C2.20618 11.4477 2.64916 11 3.19561 11H21.0054C21.5518 11 21.9948 11.4477 21.9948 12C21.9948 12.5523 21.5518 13 21.0054 13H3.19561C2.64916 13 2.20618 12.5523 2.20618 12ZM2.20618 18C2.20618 17.4477 2.64916 17 3.19561 17H21.0054C21.5518 17 21.9948 17.4477 21.9948 18C21.9948 18.5523 21.5518 19 21.0054 19H3.19561C2.64916 19 2.20618 18.5523 2.20618 18Z"
                fill="#FEF8FA"
              />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`
        ${isMenuOpen ? "top-0" : "-top-full"}
        fixed left-0 w-screen h-screen transition-all duration-300 ease-in-out overflow-hidden z-10`}>
        <NavMenu toggleMenu={setIsMenuOpen} />
      </div>
    </>
  );
};
