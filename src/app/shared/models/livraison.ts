export interface Ilivraison{
    
        montantTotal: number,
        livreur: commandelivreur  
        commandes:commandelivreur[]
    
}

export interface commandelivreur{
    id:number
}

export interface Ilivrer{
    id:number
    montantTotal:number
    etat:string
    livreur:string
    N_livraison:string
}
export interface CommandeLivraison{
    id:number
    nCommande:string
    date:string
    etat:string
    montant:number
    livraison:Ilivrer
}
export interface IIlivraison{

}