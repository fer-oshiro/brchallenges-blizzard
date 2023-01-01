import React from 'react'

import Games from './components/games'
import Sports from './components/sports'

const LgNav = (): React.ReactElement => {
  return (
    <div
      className="hidden lg:flex lg:items-center lg:w-auto w-full ml-12 "
      id="menu"
    >
      <nav>
        <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0 space-x-4">
          <Games />
          <Sports />
          <li>
            <a
              className="max-w-min p-3 block hover:bg-slate-800 rounded-md duration-300"
              href="#"
            >
              Loja
            </a>
          </li>
          <li>
            <a
              className="max-w-min p-3 block hover:bg-slate-800 rounded-md duration-300"
              href="#"
            >
              Notícias
            </a>
          </li>
          <li>
            <a
              className="max-w-min p-3 block hover:bg-slate-800 rounded-md duration-300"
              href="#"
            >
              Suporte
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LgNav
