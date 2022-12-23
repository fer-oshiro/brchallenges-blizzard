import Image from 'next/image'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'

import LgNav from '@components/Navbar/LgNav'
import SmNav from '@components/Navbar/SmNav'

export default function Home() {
  return (
    <div className="min-h-screen text-white lg:container lg:mx-auto">
      <header>
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
        <hr className="relative w-12 border-sky-500 mx-4 z-50" />
        <hr className="absolute left-0 right-0  border-slate-700" />
      </header>
    </div>
  )
}
