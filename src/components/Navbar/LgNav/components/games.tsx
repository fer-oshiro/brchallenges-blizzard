import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { games } from '@constants/games'
import { gamesMore } from '@constants/games_more'
import useNavTab from '@store/navbar'

export default function Games() {
  const { tab, toggle } = useNavTab((state) => state)

  const handleToggle = (e: React.FormEvent) => {
    e.preventDefault()
    toggle('game')
  }

  return (
    <li>
      <details
        id="details-game"
        className="relative"
        onClick={handleToggle}
        open={tab === 'game'}
      >
        <summary className="relative max-w-min p-3 hover:bg-slate-800 rounded-md duration-300 cursor-pointer flex items-center">
          Jogos
          {tab === 'game' && <IoIosArrowUp className="ml-4 text-sky-600" />}
          {tab !== 'game' && <IoIosArrowDown className="right-0 ml-4" />}
        </summary>
        <div className="fixed bottom mt-6 right-0 left-0 bg-gray-900 backdrop-contrast-90">
          <ul className="container mx-auto grid grid-cols-6 gap-y-16 justify-items-center p-8 py-16">
            {games.map((game) => (
              <li key={game.name} className="max-w-fit">
                <a
                  className="flex items-center text-xs self-center flex-col hover:bg-slate-900 text-slate-300	hover:text-white	 duration-300"
                  href="#"
                >
                  <Image src={game.img} width="50" height="50" alt="" />
                  {game.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center w-screen space-x-12 bg-slate-800 p-4">
            {gamesMore.map((game) => (
              <li key={game.name} className="max-w-fit">
                <a
                  className="flex px-4 py-2 items-center text-xs self-center hover:bg-slate-900 text-slate-300 hover:text-white duration-300 rounded-md"
                  href="#"
                >
                  <Image
                    src={game.icon}
                    width={20}
                    height={20}
                    alt=""
                    className="mr-2"
                  />
                  {game.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </li>
  )
}
