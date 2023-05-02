export type Movie = {
    id: string
    title:string
}


export type FilmDetails = {
    title: string
    episodeID:number
    director: string
    releaseDate:string
    characterConnection: Character[]
}

export type Character = {
    id: string,
    name:string
}

export type Planet = {
    id:string
    name:string
    population: number
    gravity: string
}

export type Vehicle = {
    id: string
    coste: number
    name: string
    model: string
    length: number
    passengers: string
    cargoCapacity: number
    costInCredits: number
}

export type Author = {
    id: string
    name:string
    birthYear: string
    eyeColor: string
    gender: string
    height: string
    species: Specie
    homeworld: HomeWorld
}

type Specie =  {
    name:string
}

type HomeWorld = {
    name:string
}