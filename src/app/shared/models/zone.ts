export interface Zone{
    format?:format
    "hydra:member"?:format[]

}

export interface format{
    id?:number,
    nom?:string,
    prix?:number
    quartier?:quart[]
}

export interface quart{
    id?:number,
    libelle?:string
}