import { Menu, Produitd } from "./detail";
import { Produit } from "./produit";

export interface Panier1{
    burgers:Produitd[],
    menus:Menu[],
    frites:Produitd[]
    boissons:Produitd[]
}