import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { sports } from '@constants/sport'
import useNavTab from '@store/navbar'

export default function Sports() {
  const { tab, toggle } = useNavTab((state) => state)

  const handleToggle = (e: React.FormEvent) => {
    e.preventDefault()
    toggle('sport')
  }

  return (
    <li>
      <details
        id="details-sport"
        className="relative"
        onClick={handleToggle}
        open={tab === 'sport'}
      >
        <summary className="relative max-w-min p-3 hover:bg-slate-800 rounded-md duration-300 cursor-pointer flex items-center">
          Esportes
          {tab === 'sport' && <IoIosArrowUp className="ml-4 text-sky-600" />}
          {tab !== 'sport' && <IoIosArrowDown className="right-0 ml-4" />}
        </summary>
        <div className="fixed bottom mt-6 right-0 left-0 bg-gray-900 backdrop-contrast-90">
          <ul className="container mx-auto grid grid-cols-5 gap-16 justify-items-center p-8 py-16">
            {sports.map((sport) => (
              <li key={sport.name} className="w-full">
                <a
                  className="flex items-center text-xs self-center flex-col hover:bg-slate-900 text-slate-300	hover:text-white text-center duration-300"
                  href="#"
                >
                  <Image
                    className="w-full"
                    src={sport.img}
                    width="150"
                    height="150"
                    alt=""
                  />
                  {sport.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center w-screen space-x-12 bg-slate-800 p-4">
            <li className="max-w-fit">
              <a
                className="flex px-4 py-2 items-center text-xs self-center hover:bg-slate-900 text-slate-300 hover:text-white duration-300 rounded-md"
                href="#"
              >
                <Image
                  src="/icons/icon-torneio.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="mr-2"
                />
                Torneios da comunidade
              </a>
            </li>
          </ul>
        </div>
      </details>
    </li>
  )
}
