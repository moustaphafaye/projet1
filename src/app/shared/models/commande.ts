export interface Commande {
    
    commandeburger?: Commandeburger[]
    commandemenu?: Commandemenu[]
    commandefrite: Commandefrite[]
    commandetailleboisson: Commandetailleboisson[]
    zone: string
    quartier: string
  }
  
  export interface Commandeburger {
    quantite?: number
    burger?: string
  }
  
  export interface Burger {
    id:number,
    
  }
  
  export interface Commandemenu {
    quantite?: number
    menu?: string
  }
  
  export interface Menu {
    id:number
    
  }
  
  export interface Commandefrite {
    quantite?: number
    portionFrite?: PortionFrite
  }
  
  export interface PortionFrite {
    id:number
    
  }
  
  export interface Commandetailleboisson {
    quantitetailleboisson?: number
    tailleBoisson?: TailleBoisson
  }
  
  export interface TailleBoisson {
    id:number
   
  }
  
  // export interface Zone {
  //   id: number
  // }
  
  // export interface Quartier {
  //   id: number
  // }