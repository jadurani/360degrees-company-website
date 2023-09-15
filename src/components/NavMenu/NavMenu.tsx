import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface NavMenuProps {
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}

type NavLink = {
  label: string;
  path: string;
};

const NAV_LINKS: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "about-us",
  },
  {
    label: "What We Do",
    path: "what-we-do",
  },
  {
    label: "Projects",
    path: "projects",
  },
  {
    label: "Contact Us",
    path: "contact-us",
  },
];

export const NavMenu = ({ toggleMenu }: NavMenuProps) => {
  return (
    <div className="w-screen h-screen bg-neutral-900 relative flex">
      <div className="absolute top-0 left-0 w-screen">
        <div className="container max-w-6xl mx-auto py-6 px-4 flex justify-between items-center lg:items-start">
          <span>&nbsp;</span>
          {/* close button */}
          <button className="mt-3" onClick={() => toggleMenu(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#FEF8FA"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav className="m-auto">
        <ul>
          {NAV_LINKS.map((l, idx) => (
            <li key={idx} className="flex justify-center my-2">
              <Link
                href={l.path}
                className="text-h3 text-neutral-50/75 hover:text-neutral-50 transition-colors duration-300 font-header font-bold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
