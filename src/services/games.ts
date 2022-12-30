import Api from './api'

export interface IGames {
  name: string
  category: string
  image: string
  logo: string
}

export default function GetGames() {
  return Api.get<IGames[]>('/games')
}
