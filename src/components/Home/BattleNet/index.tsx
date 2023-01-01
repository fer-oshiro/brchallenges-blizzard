import Image from 'next/image'

import gameList from '@assets/battlenet/games.svg'
import connect from '@assets/battlenet/connect.svg'
import buy from '@assets/battlenet/buy.svg'
import mobile from '@assets/battlenet/mobile.svg'
import BattleNetButton from './components/button'

export default function BattleNet(): React.ReactElement {
  return (
    <section
      className="bg-cover"
      style={{ backgroundImage: 'url(/footer-background.png)' }}
    >
      <div className="lg:container lg:mx-auto py-36 flex sm:flex-row flex-col">
        <div className="min-w-fit mt-auto pl-8">
          <Image src="/logo-battle-net.png" width={200} height={25} alt="" />
          <h2 className="text-white md:text-2xl text-lg font-bold my-8">
            Baixe agora o battle.net
          </h2>
          <ul className="text-slate-400 [&>li]:flex [&>li]:gap-4 [&>li]:mb-6  md:[&>li>img]:max-w-[20px] [&>li>img]:max-w-[15px] md:text-base text-xs">
            <li>
              <Image src={gameList} width={20} height={20} alt="" />
              Seus jogos em um só lugar
            </li>
            <li>
              <Image src={connect} width={20} height={20} alt="" />
              Conecte-se aos seus amigos
            </li>
            <li>
              <Image src={buy} width={20} height={20} alt="" />
              Compre jogos e itens digitais
            </li>
          </ul>
          <BattleNetButton />
          <div className="py-16 text-white flex gap-6 md:text-base text-xs">
            <Image src={mobile} width={20} height={20} alt="" />
            <p>
              Também disponível como{' '}
              <a className="underline block cursor-pointer">aplicativo móvel</a>
            </p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="sm:w-[800px] sm:h-[550px] w-[300px] h-[300px] mx-auto">
            <Image
              src="/ilustrations/app.png"
              width={800}
              height={800}
              alt=""
              className="absolute bottom-0 sm:min-w-[800px] min-w-[100px]  max-w-[500px] object-left"
            />
            <Image
              src="/ilustrations/app-mini.png"
              width={400}
              height={400}
              alt=""
              className="absolute bottom-0 sm:ml-[200px] sm:min-w-[400px] max-w-[250px] ml-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
