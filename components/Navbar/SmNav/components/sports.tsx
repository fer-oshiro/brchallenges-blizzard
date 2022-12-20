import Image from "next/image"
import React from "react"
import { sports } from "../../../../constants/sport"

export default function Sports() {
  return (
    <details className="cursor-pointer">
      <summary className="max-w-fit	p-2 hover:bg-slate-800 rounded-md duration-300">Esportes</summary>
      <ul className="px-8 py-4">
        {
          sports.map((sport) => (
            <li className="pb-2" key={sport.name}>
              <a
                className="flex items-center text-xs self-center"
                href="#"
              >
                <Image src={sport.img} width='50' height='50' alt='' className="mr-4" />
                {sport.name}
              </a>
            </li>))
        }
      </ul>
    </details>
  )
}