import Image from 'next/image'
import Link from 'next/link'
import { BiUser } from 'react-icons/bi'

import LgNav from '@components/Navbar/LgNav'
import SmNav from '@components/Navbar/SmNav'
import useNavTab from '@store/navbar'
import useCarouselTab from '@store/carousel'
import Carousel from '@components/Carousel/Tab'
import { banner } from '@constants/banner'
import hover from '@assets/banner/utils/hover.png'
import noHover from '@assets/banner/utils/no-hover.png'
import consoles from '@assets/consoles.png'
import games from '@assets/icons/icon-all.svg'
import List from '@components/Games/list'

import gameList from '@assets/battlenet/games.svg'
import connect from '@assets/battlenet/connect.svg'
import buy from '@assets/battlenet/buy.svg'
import mobile from '@assets/battlenet/mobile.svg'
import Login from '@components/Modal/login'
import useLoginModal from '@store/login'

import windows from '@assets/so/windows.png'
import linux from '@assets/so/linux.png'
import mac from '@assets/so/mac.svg'
import BattleNetButton from '@components/BattleNet/button'

function Home({ os }: { os: string }) {
  const { tab } = useNavTab((state) => state)
  const { bg, index } = useCarouselTab((state) => state)
  const { toggle } = useLoginModal((state) => state)
  const menuBg = tab ? 'bg-main backdrop-blur-sm' : ''

  return (
    <>
      <div className="bg-cover bg-no-repeat bg-top duration-500 relative z-10" style={{ backgroundImage: `url(${bg})` }}>
        <header className='h-screen text-white flex flex-col'>
          <div className={menuBg}>
            <div className='lg:container lg:mx-auto'>
              <nav className="flex items-center justify-between mx-8 py-6">
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
          <div className='lg:container lg:mx-auto grow grid grid-cols-1 md:grid-cols-3 grid-flow-row auto-rows-auto lg:grid-cols-6 gap-x-16 px-8'>
            <div className='col-start-1 row-start-1 lg:col-start-2 col-span-3 row-span-1 lg:row-span-2 self-end lg:self-center lg:pb-32'>
              <h1 className="text-4xl lg:text-6xl font-bold lg:mt-24 w-title max-w-fit">
                {banner[index]?.title || ''}
              </h1>
              <p className="mb-16 text-lg lg:text-2xl mt-4 lg:mt-8">
                {banner[index]?.subtitle || ''}
              </p>
              <Link
                href="/#"
                className="max-w-fit rounded-sm px-6 py-4 bg-sky-500 hover:bg-sky-400 text-sm	duration-700 flex items-center"
              >
                <BiUser className="mr-2 text-xl" />
                {banner[index]?.button || ''}
              </Link>
            </div>
            <div className='pt-8 row-start-2 col-start-1 col-span-2 lg:col-span-1 lg:row-start-1 lg:row-span-2 self-center lg:pl-8'>
              <Carousel />
            </div>
            <Image src={banner[index]?.logo || ''} className='duration-500 self-center justify-self-end col-start-2  row-start-1 lg:col-start-5 col-span-2 hidden md:block lg:pb-0' alt='' />
            <div className='row-start-2 col-start-3 lg:col-start-5 lg:col-span-2 hidden md:block justify-self-end  w-60 lg:w-80 pt-24 lg:pt-6'>
              <p className='text-end pb-6'>ASSISTA O TRAILER</p>
              <div className='relative'>
                <div className='absolute w-60 lg:w-80 aspect-video bg-cover'>
                  <Image src={hover.src} alt='' width='80' height='80' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                  <Image unoptimized src={banner[index]?.animation || ''} alt='' className='w-60 lg:w-80 aspect-video bg-cover' />
                </div>
                <div className='absolute hover:opacity-0 w-60 lg:w-80 aspect-video'>
                  <Image src={noHover.src} alt='' width='80' height='80' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                  <Image src={banner[index]?.cover || ''} alt='' className='w-60 lg:w-80 aspect-video' />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div >
      <section className='lg:container lg:mx-auto py-48 px-8'>
        <div className='flex justify-between'>
          <p className='text-xl text-zinc-400 font-semibold hidden lg:block'>GAMES</p>
          <p className='text-xl lg:text-5xl text-white font-bold max-w-min'>Jogos exclusivos</p>
          <Image src={consoles} width='160' height='22' alt='Disponiveis para pc, nintendo switch, xbox e playstation' className='self-end hidden md:block' />
          <a className='flex self-end text-sky-400 hover:text-sky-300 cursor-pointer space-x-2'>
            <Image src={games.src} width='20' height='20' alt='' />
            <p>Ver todos os jogos</p>
          </a>
        </div>
        <List />
      </section>
      <section className='bg-cover' style={{ backgroundImage: 'url(/footer-background.png)' }}>
        <div className='lg:container lg:mx-auto py-36 flex sm:flex-row flex-col'>
          <div className='min-w-fit mt-auto pl-8'>
            <Image src='/logo-battle-net.png' width={200} height={25} alt='' />
            <h2 className='text-white md:text-2xl text-lg font-bold my-8'>Baixe agora o battle.net</h2>
            <ul className='text-slate-400 [&>li]:flex [&>li]:gap-4 [&>li]:mb-6  md:[&>li>img]:max-w-[20px] [&>li>img]:max-w-[15px] md:text-base text-xs'>
              <li>
                <Image src={gameList} width={20} height={20} alt='' />
                Seus jogos em um só lugar
              </li>
              <li>
                <Image src={connect} width={20} height={20} alt='' />
                Conecte-se aos seus amigos
              </li>
              <li>
                <Image src={buy} width={20} height={20} alt='' />
                Compre jogos e itens digitais
              </li>
            </ul>
            <BattleNetButton />
            <div className='py-16 text-white flex gap-6 md:text-base text-xs'>
              <Image src={mobile} width={20} height={20} alt='' />
              <p>
                Também disponível como <a className='underline block cursor-pointer'>aplicativo móvel</a>
              </p>
            </div>
          </div>
          <div className='relative w-full overflow-hidden'>
            <div className='sm:w-[800px] sm:h-[550px] w-[300px] h-[300px] mx-auto'>
              <Image src='/ilustrations/app.png' width={800} height={800} alt='' className='absolute bottom-0 sm:min-w-[800px] min-w-[100px]  max-w-[500px] object-left' />
              <Image src='/ilustrations/app-mini.png' width={400} height={400} alt='' className='absolute bottom-0 sm:ml-[200px] sm:min-w-[400px] max-w-[250px] ml-[100px]' />
            </div>
          </div>
        </div>
      </section>
      <footer className='py-8 w-full'>
        <p className='text-white text-center'>
          Desenvolvido por <b>Fernanda Oshiro</b>
        </p>
      </footer>
      {<Login />}
    </>
  )
}

export default Home