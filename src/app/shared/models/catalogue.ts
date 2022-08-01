import { Produit } from "./produit";

export interface Catalogue {
    menu:Produit[];
    burger:Produit[];
    produits:Produit[];
    "hydra:member"?: [
        {
            menu:Produit[]
        },
        {
            burger:Produit[]
        }
    ]
 }