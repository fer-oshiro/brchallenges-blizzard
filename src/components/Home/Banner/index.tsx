import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'

import LgNav from '@components/Home/Banner/Navbar/LgNav'
import SmNav from '@components/Home/Banner/Navbar/SmNav'
import useCarouselTab from '@store/carousel'
import Carousel from '@components/Home/Banner/Carousel/Tab'
import { banner } from '@constants/banner'
import hover from '@assets/banner/utils/hover.png'
import noHover from '@assets/banner/utils/no-hover.png'

import useLoginModal from '@store/login'
import IfNull from '@utils/IfNull'
import useNavTab from '@store/navbar'

export default function Banner(): React.ReactElement {
  const { bg, index } = useCarouselTab((state) => state)
  const { tab } = useNavTab((state) => state)

  const { toggle } = useLoginModal((state) => state)
  const menuBg = IfNull(tab, 'lg:bg-main lg:backdrop-blur-sm', '')
  const trailer: string = IfNull(tab, ' -z-10', '')

  return (
    <div
      className="bg-cover bg-no-repeat bg-top duration-500 relative z-10"
      style={{ backgroundImage: `url(${bg ?? ''})` }}
    >
      <header className="h-screen text-white flex flex-col">
        <div className={menuBg}>
          <div className="lg:container lg:mx-auto">
            <nav className="flex items-center justify-between mx-8 py-6">
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/logo-blizzard.png"
                  width="100"
                  height="200"
                  alt="Logo"
                />
              </Link>
              <LgNav />

              <div className="flex space-x-4 ml-auto mr-16 lg:mr-0">
                <Link
                  href="/#"
                  className="min-w-max self-center hidden md:block border border-white border-solid rounded-sm	px-4 py-3 text-xs	hover:bg-white hover:text-slate-900	duration-1000"
                >
                  Criar conta
                </Link>
                <button
                  onClick={() => toggle(true)}
                  className="hidden md:flex items-center rounded-sm px-4 py-2 bg-sky-500 hover:bg-sky-400 text-xs	duration-700"
                >
                  <BiUser className="mr-2 text-xl" />
                  Logar
                </button>
              </div>
              <SmNav />
            </nav>
            <hr className="relative w-12 border-sky-500 mx-8 z-1 border-t-4" />
            <hr className="absolute left-0 right-0  border-light_line border-t-4 -mt-1" />
          </div>
        </div>
        <div className="lg:container lg:mx-auto grid grid-cols-1 md:grid-cols-3 grid-flow-row auto-rows-min  gap-y-16 px-8 my-auto md:pt-20 lg:pt-0">
          <div className="col-start-1 row-start-1 lg:col-start-2 col-span-3 row-span-1 lg:row-span-2 self-end lg:self-center lg:pb-32">
            <h1 className="text-4xl lg:text-6xl font-bold lg:mt-24 w-title max-w-fit">
              {banner[index]?.title ?? ''}
            </h1>
            <p className="mb-16 text-lg lg:text-2xl mt-4 lg:mt-8">
              {banner[index]?.subtitle ?? ''}
            </p>
            <Link
              href="/#"
              className="max-w-fit rounded-sm px-6 py-4 bg-sky-500 hover:bg-sky-400 text-sm	duration-700 flex items-center"
            >
              <BiUser className="mr-2 text-xl" />
              {banner[index]?.button ?? ''}
            </Link>
          </div>
          <div className="pt-8 lg:my-auto mt-auto row-start-2 col-start-1 col-span-2 lg:col-span-1 lg:row-start-1 lg:row-span-2 self-center lg:pl-8">
            <Carousel />
          </div>
          <Image
            src={banner[index]?.logo ?? ''}
            priority
            className="duration-500 self-center justify-self-end col-start-2 row-start-1 lg:col-start-5 col-span-2 hidden md:block lg:pb-0 -translate-y-full lg:-translate-y-0 -z-10"
            alt=""
          />
          <div
            className={`row-start-2 col-start-3 lg:col-start-5 lg:col-span-2 hidden md:block justify-self-end  w-60 lg:w-80 min-h-[185px] lg:min-h-[250px] mt-auto ${trailer}`}
          >
            <p className="text-end pb-6">ASSISTA O TRAILER</p>
            <div className="relative">
              <div className="absolute w-60 lg:w-80 aspect-video bg-cover">
                <Image
                  src={hover.src}
                  alt=""
                  width="80"
                  height="80"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <Image
                  unoptimized
                  src={banner[index]?.animation ?? ''}
                  alt=""
                  className="w-60 lg:w-80 aspect-video bg-cover"
                />
              </div>
              <div className="absolute hover:opacity-0 w-60 lg:w-80 aspect-video">
                <Image
                  src={noHover.src}
                  alt=""
                  width="80"
                  height="80"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <Image
                  src={banner[index]?.cover ?? ''}
                  alt=""
                  className="w-60 lg:w-80 aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
