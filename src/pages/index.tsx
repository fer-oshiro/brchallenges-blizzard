import Image from 'next/image'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'

import LgNav from '@components/Navbar/LgNav'
import SmNav from '@components/Navbar/SmNav'
import useNavTab from '@store/navbar'

export default function Home() {
  const { tab } = useNavTab((state) => state)
  const bg = tab ? 'bg-main backdrop-blur-sm' : ''

  return (
    <>
      <div className="bg-[url('/banner-hero/games/diablo-bg.png')] bg-cover bg-no-repeat  ">
        <header className='min-h-screen text-white'>
          <div className={bg}>
            <div className=' lg:container lg:mx-auto'>
              <nav className="flex items-center justify-between mx-4 py-6">
                <Link href="/" className="cursor-pointer">
                  <Image
                    src="/logo-blizzard.png"
                    width="100"
                    height="200"
                    alt="Logo"
                    priority
                  />
                </Link>
                <LgNav />

                <div className="flex space-x-4 ml-auto mr-16 lg:mr-0">
                  <Link
                    href="/#"
                    className="min-w-max hidden md:block border border-white border-solid rounded-sm	px-4 py-2 text-xs	hover:bg-white hover:text-slate-900	duration-1000	"
                  >
                    Criar conta
                  </Link>
                  <button
                    onClick={() => console.log('login')}
                    className="hidden md:flex items-center rounded-sm px-4 py-2 bg-sky-500 hover:bg-sky-400 text-xs	duration-700"
                  >
                    <BiUser className="mr-2" />
                    Logar
                  </button>
                </div>
                <SmNav />
              </nav>
              <hr className="relative w-12 border-sky-500 mx-4 z-1" />
              <hr className="absolute left-0 right-0  border-slate-700" />

            </div>
          </div>
          <div className="">
            <div className='mt-100'>
              <h1 className="text-4xl lg:text-6xl font-bold mt-12 lg:mt-24">
                Jogue os jogos mais populares da Blizzard
              </h1>
              <p className="text-lg lg:text-2xl mt-4 lg:mt-8">
                Jogue os jogos mais populares da Blizzard, incluindo World of Warcraft,
                Overwatch, Hearthstone, StarCraft II e muito mais.
              </p>
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-8 lg:mt-16">
                <Link
                  href="/#"
                  className="min-w-max border border-white border-solid rounded-sm	px-4 py-2 text-xs	hover:bg-white hover:text-slate-900	duration-1000	"
                >
                  Criar conta
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div >
      <section>
        asdasdasd
      </section>
    </>
  )
}
