import { Produitd } from "./detail"

export interface Panier{

    commandeburger?:commandeburger[],
    commandemenu?:commandemenu[],
    commandefrite?:commandefrite[],
    commandetailleboisson?:commandetailleboisson[],
    zone?:zone,
    quartier?:quartier   

}
export interface commandeburger{
    quantite?:number
    burger?:Produitd
}

export interface commandemenu{
    quantite?:number
    burger?:Produitd
}


export interface commandefrite{
    quantite?:number
    portionFrite?:Produitd
}


export interface commandetailleboisson{
    quantitetailleboisson?:number
    tailleBoisson?:taille
}

export interface taille{
    id?:number
}












export interface zone{
    id?:number
}
export interface quartier{
    id?:number
}