import axios from "axios"

const API_URL = "https://pokeapi.co/api/v2/pokemon"

export type Pokemon = {
    name: string
    url: string
}
export type PokemonDetails = {
    id: number
    name: string
    height: number
    weight: number
    types: {
        type: {
            name: string
        }
    }[]
    sprites: {
    front_default: string
    }
}

export async function getPokemon() {
    const response = await axios.get(API_URL, {
        params: {
            limit: 150,
            offset: 0
        }
    })
    return response.data
}
export async function getPokemonDetails(url: string) {
    const response = await axios.get<PokemonDetails>(url)
    return response.data
}