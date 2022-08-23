// import { Menuburg } from "./menuburg";
// import { Produit } from "./produit"

// import { Produit } from "./produit";

export interface DetailsProduit{
    produit: Produit
    boissons: Produit[]
    portions: Produit[]
    details: Produit[]
}

export interface Produit {
    id?:number
    image:Blob
    nom:string
    prix:number
    quantite?:number
    description?:string
    '@type':string
}

































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
    quantite?:number
    prix?:number
    description:string
    type?:string,
    boissonTaille?:number
  
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
    quantite?:number
    description?:string
    type?:string
    menuburger?:burgermenu[]
    menuportionfriet?:menufrite[]
    menutaille?:menutail[]
    boisson?:Produitd
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