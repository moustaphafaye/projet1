import { Produit } from "./produit";



export interface Complement{
    portion:Produit[];
    taille:Produit[];
    complement:Produit[];
    "hydra:member"?: [
        {
            portion:Produit[]
        },
        {
            taille:Produit[]
        }
    ]
}