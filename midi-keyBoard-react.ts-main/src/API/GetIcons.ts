import axios from 'axios'

export class Icon {
    // static async getIcons(): Promise<[]> {
    //     const respons = await fetch('https://rickandmortyapi.com/api/character')
    //     const date = respons.json()
    //     return date
    // }
}

export default async function getIcons(): Promise<[]> {
    const respons = await axios.get('https://rickandmortyapi.com/api/character')
    const rezolve = await respons.data
    const date = rezolve
    return date.results
  }