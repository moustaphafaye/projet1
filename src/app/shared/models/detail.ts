// import { Menuburg } from "./menuburg";
// import { Produit } from "./produit"


export interface Detail {

    burger:Produitd,
    menu:Menu,
    Taillee:TailleBoisson[],
    frite:Produitd[]  
}


export interface Produitd {
    id:string
    nom:string
    image?:Blob
    prix?:number
    description:string
    type?:string
}
export interface TailleBoisson{
    id?:number
    libelle?:string
    prix?:number
    tailleboisson:BoissonTaille[]
}

export interface BoissonTaille{
    id?:number
    quantitetailleboissonstock?:number
    boisson?:Produitd
    prixtaille:number
}
export interface Menu {
    id?:number
    nom?:string
    prix?:number
    image?:Blob
    description?:string
    type?:string
    menuburger?:burgermenu[]
    menuportionfriet?:menufrite[]
    menutaille?:menutail[]
}

export interface menufrite{
    id?:number
    quantity?:number
    portionFrite?:Produitd

}
export interface burgermenu{
    id?:number
    quentity?:number
    burger?:Produitd
}

export interface menutail{
        id?:number
        quantity?:number
        taille?:tailles
}
export interface tailles{
    id?:number
    prix?:number
    libelle?:string
    tailleboisson:tailleboissont[]
}

export interface tailleboissont{
    id?:number
    quantitetailleboissonstock?:number
    boisson?:Produitd
    prixtaille?:number
}