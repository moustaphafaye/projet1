

export interface Izone{
    id:number,
    nom:string,
    commande:Icommande[]
}
export interface Icommande{
    id:number,
    nCommande:string,
    montant:number
    etat:string
}
export interface Livreur{
    id:number,
    matriculeMoto:string,
    telephone:number,
    nom:string,
    prenom:string
}


export interface Zone {
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