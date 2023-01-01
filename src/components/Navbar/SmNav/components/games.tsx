import Image from 'next/image'
import React from 'react'

import { games } from '@constants/games'

export default function Games(): React.ReactElement {
  return (
    <details className="cursor-pointer">
      <summary className="max-w-fit	p-2 hover:bg-slate-800 rounded-md duration-300">
        Jogos
      </summary>
      <ul className="px-8 py-4">
        {games.map((game) => (
          <li className="pb-2" key={game.name}>
            <a className="flex items-center text-xs self-center" href="#">
              <Image
                src={game.img}
                width="50"
                height="50"
                alt=""
                className="mr-4"
              />
              {game.name}
            </a>
          </li>
        ))}
      </ul>
    </details>
  )
}
