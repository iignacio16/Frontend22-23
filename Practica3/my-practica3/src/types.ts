export type headAPI = {
    id:string,
    firstName:string,
    lastName:string
}

export type traitsAPI = {
    id: string,
    name:string
}

export type HouseAPI = {
    id: string,
    name:string,
    houseColors: string,
    founder:string,
    animal:string,
    element:string,
    ghost:string,
    commonRoom: string,
    heads: headAPI[],
    traits: traitsAPI[]
}

export type Houses = Omit<HouseAPI, "id" | "houseColors" | "animal" | "element" | "ghost" | "heads" | "traits"> & {
    heads: Array<{
        "firstName": string
    }>;
    traits: Array<{
        "name":string
    }>
}

export type wizardAPI = {
    elixirs: elixirsWizard[],
    id:string,
    firstName:string,
    lastName:string
}

export type elixirsWizard = {
    id:string,
    name:string
}

export type wizards = Omit<wizardAPI, "elixirs">


export type elixirsAPI = {
        id: string,
        name: string,
        effect: string,
        sideEffects: string,
        characteristics: string,
        time: string,
        difficulty: string,
        ingredients:ingredientsElixir[],
        inventors: investorsElixir[],
        manufacturer: string
}

export type ingredientsElixir = {
    id:string,
    name:string
}

export type investorsElixir = {
    id:string,
    firstName: string,
    lastName:string
}