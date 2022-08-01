




export interface DetailMenu{

    id:string
    "menuburger"?:[
            {
                id:string
                quentity:number
                "burger":{
                    id:string
                    nom:string
                    prix:number
                }
            }
    ]
    nom:string
    prix:string
    image:string
    description:string
}
