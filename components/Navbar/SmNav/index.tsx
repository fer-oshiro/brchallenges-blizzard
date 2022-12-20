import Image from "next/image";
import React from "react";
import Games from "./components/games";
import Sports from "./components/sports";
import { gamesMore } from '../../../constants/games_more'

const SmNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (isOpen) {
    return (
      <div className="flex flex-col lg:hidden lg:items-center lg:w-auto w-full absolute top-0 min-h-full right-0 max-w-sm bg-black z-10 sm:p-8 p-4 " id="menu">
        <button onClick={() => setIsOpen(!isOpen)} className="self-end max-w-min p-3 block hover:bg-red-900 rounded-md duration-300">
          <svg
            className="fill-current text-white h-8 w-8"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 01-1.697-1.697l3.03-2.65-3.031-2.651a1.2 1.2 0 111.697-1.697l2.65 3.03 2.651-3.03a1.2 1.2 0 111.697 1.697l-3.03 2.651 3.03 2.65a1.2 1.2 0 010 1.698z" />
          </svg>
        </button>
        <nav className="pb-16">
          <ul>
            <li >
              <Games />
            </li>
            <li >
              <Sports />
            </li>
            <li>
              <a
                className="max-w-min p-3 block hover:bg-slate-800 rounded-md duration-300	"
                href="#"
              >
                Loja
              </a>
            </li>
            <li>
              <a
                className="max-w-min p-3 block hover:bg-slate-800 rounded-md duration-300	"
                href="#"
              >
                Notícias
              </a>
            </li>
            <li>
              <a
                className="max-w-min p-3 block hover:bg-slate-800 rounded-md duration-300	"
                href="#"
              >
                Suporte
              </a>
            </li>
          </ul>
        </nav>
        <nav className="mt-auto pt-4 pl-4 border-t-2 border-slate-500">
          <ul>
            {
              gamesMore.map((game) => (
                <li key={game.name} className="py-3">
                  <a
                    className="pb-2 border-b-2 max-w-fit border-transparent hover:border-sky-400 flex text-xs"
                    href="#"
                  >
                    <Image src={game.icon} width={15} height={15} alt='' className="mr-4" />
                    {game.name}
                  </a>
                </li>))
            }
            <li className="py-3">
              <a
                className="pb-2 border-b-2 max-w-fit border-transparent hover:border-sky-400 flex text-xs"
                href="#"
              >
                <Image src='/icons/icon-torneio.svg' width={15} height={15} alt='' className="mr-4" />
                Torneios da comunidade
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div className="flex lg:hidden lg:items-center lg:w-auto max-w-fit" id="menu">
      <button onClick={() => setIsOpen(!isOpen)} className="flex align-center">
        <svg
          className="fill-current text-white h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="https://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
          />
        </svg>
      </button>
    </div>

  )
};

export default SmNav;