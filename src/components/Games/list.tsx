import Image from "next/image"
import { useEffect, useState } from "react"
import GetGames, { IGames } from "../../services/games"

export default function List() {
  const [data, setData] = useState<IGames[] | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function fetchGames() {
      const response = GetGames()
      const data = await response
      setData(data)
      setLoading(false)
    }
    fetchGames()
  }, [])

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 pt-16 gap-x-4 sm:gap-y-32 gap-y-4">
      {data && data.map((game) => (
        <div key={game.name}>
          <div className="relative">
            <div className="relative">
              <div className="w-full h-full overflow-hidden">
                <div className="w-full hover:[&:first-child]:scale-125 hover:[&>*:nth-child(2)]:from-gray-900 duration-300">
                  <Image src={game.image} width={300} height={300} alt='' className="w-full" />
                  <div className="absolute z-10  bg-gradient-to-t  from-inherit  w-full h-full top-0  duration-300" />
                </div>
                <Image src={game.logo} width={150} height={300} alt='' className="absolute bottom-4 -translate-x-1/2 left-1/2 pointer-events-none w-1/2" />
              </div>
            </div>
            <div className="absolute pt-4 sm:block hidden">
              <p className="text-slate-50 font-semibold pt-4 md:text-lg text-sm">{game.name}</p>
              <p className="text-slate-400 text-[.6rem] md:text-xs pt-1">{game.category}</p>
            </div>
          </div>
        </div>
      ))}
      <a className="border-light_line border-4 rounded-md flex flex-col justify-center items-center space-y-4 cursor-pointer p-4">
        <Image src="/logo-blizzard.png" width={160} height={160} alt='' className="md:w-1/2 " />
        <div className="flex space-x-2">
          <Image src="/icons/icon-all-white.svg" width={8} height={8} alt='' className="md:w-4 w-2 hidden sm:block" />
          <p className="text-white text-center md:text-sm text-[10px]">Ver todos jogos</p>
        </div>
      </a>
    </div>
  )
}

