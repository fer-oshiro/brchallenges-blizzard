import Image from 'next/image'
import { useEffect, useState } from 'react'
import GetGames, { IGames } from '@services/games'

export default function List(): React.ReactElement {
  const [data, setData] = useState<IGames[] | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function fetchGames(): Promise<void> {
      const response = GetGames()
      const data = await response
      setData(data)
      setLoading(false)
    }
    fetchGames()
  }, [])

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 pt-16 gap-x-4 sm:gap-y-32 gap-y-4">
      {data?.map((game) => (
        <div key={game.name}>
          <div className="relative">
            <div className="relative">
              <div className="w-full h-full overflow-hidden">
                <div className="w-full hover:[&:first-child]:scale-125 hover:[&>*:nth-child(2)]:from-gray-900 duration-300">
                  <Image
                    src={game.image}
                    width={300}
                    height={300}
                    alt=""
                    className="w-full"
                  />
                  <div className="absolute z-10  bg-gradient-to-t  from-inherit  w-full h-full top-0  duration-300" />
                </div>
                <Image
                  src={game.logo}
                  width={150}
                  height={300}
                  alt=""
                  className="absolute bottom-4 -translate-x-1/2 left-1/2 pointer-events-none w-1/2"
                />
              </div>
            </div>
            <div className="absolute pt-4 sm:block hidden">
              <p className="text-slate-50 font-semibold pt-4 md:text-lg text-sm">
                {game.name}
              </p>
              <p className="text-slate-400 text-[.6rem] md:text-xs pt-1">
                {game.category}
              </p>
            </div>
          </div>
        </div>
      ))}
      {isLoading && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <a className="border-light_line border-4 rounded-md flex flex-col justify-center items-center space-y-4 cursor-pointer p-4">
        <Image
          src="/logo-blizzard.png"
          width={160}
          height={160}
          alt=""
          className="md:w-1/2 "
        />
        <div className="flex space-x-2">
          <Image
            src="/icons/icon-all-white.svg"
            width={8}
            height={8}
            alt=""
            className="md:w-4 w-2 hidden sm:block"
          />
          <p className="text-white text-center md:text-sm text-[10px]">
            Ver todos jogos
          </p>
        </div>
      </a>
    </div>
  )
}
