import api from './api'

export interface IGames {
  name: string
  category: string
  image: string
  logo: string
}

export default async function GetGames(): Promise<IGames[]> {
  return await api('/games').get<IGames[]>()
}
