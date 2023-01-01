import Image from 'next/image'

import consoles from '@assets/consoles.png'
import games from '@assets/icons/icon-all.svg'
import List from './components/list'

export default function Games(): React.ReactElement {
  return (
    <section className="lg:container lg:mx-auto py-48 px-8">
      <div className="flex justify-between">
        <p className="text-xl text-zinc-400 font-semibold hidden lg:block">
          GAMES
        </p>
        <p className="text-xl lg:text-5xl text-white font-bold max-w-min">
          Jogos exclusivos
        </p>
        <Image
          src={consoles}
          width="160"
          height="22"
          alt="Disponiveis para pc, nintendo switch, xbox e playstation"
          className="self-end hidden md:block"
        />
        <a className="flex self-end text-sky-400 hover:text-sky-300 cursor-pointer space-x-2">
          <Image src={games.src} width="20" height="20" alt="" />
          <p>Ver todos os jogos</p>
        </a>
      </div>
      <List />
    </section>
  )
}
