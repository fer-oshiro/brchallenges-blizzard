import { banner } from '@constants/banner'
import create from 'zustand'

interface CarouselGame {
  index: number
  game: string | null
  bg: string | undefined
  toggle: (Game: string) => void
  next: () => void
}

const useCarouselGame = create<CarouselGame>((set) => ({
  index: 0,
  game: banner[0].name,
  bg: banner[0].img?.src,
  toggle: (game: string) =>
    set((state) => {
      const notInclude = ['StarCraft® II', 'Diablo® Immortal']
      if (notInclude.includes(game)) return state
      if (state.game === game) return state
      return {
        game,
        bg: banner.find((item) => item.name === game)?.img?.src,
        index: banner.findIndex((item) => item.name === game),
      }
    }),
  next: () =>
    set((state) => {
      const index = state.index + 1
      if (index > banner.length - 1) {
        return {
          game: banner[0].name,
          bg: banner[0].img?.src,
          index: 0,
        }
      }
      return {
        game: banner[index].name,
        bg: banner[index].img?.src,
        index,
      }
    }),
}))

export default useCarouselGame
