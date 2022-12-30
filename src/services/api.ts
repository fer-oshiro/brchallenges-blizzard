export default class Api {
  static async get<T>(url: string): Promise<T> {
    const response = await fetch(
      `https://api.brchallenges.com/api/blizzard${url}`
    )
    return await response.json()
  }
}
