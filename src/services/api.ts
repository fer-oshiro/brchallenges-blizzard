interface IApi {
  get: <T>() => Promise<T>
}

const api = (url: string): IApi => {
  return {
    async get<T>(): Promise<T> {
      const response = await fetch(
        `https://api.brchallenges.com/api/blizzard${url}`
      )
      return await response.json()
    },
  }
}

export default api
