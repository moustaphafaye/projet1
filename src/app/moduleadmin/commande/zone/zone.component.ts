import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { commandelivreur, Ilivraison } from 'src/app/shared/models/livraison';
import { Icommande, Livreur } from 'src/app/shared/models/zone';
import { LivreurService } from 'src/app/shared/services/livreur.service';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  
  id:number=+this.route.snapshot.params['id']
  livreurs:any;
  tableau:Icommande[]=[]
  tableaux:Livreur[]=[]
  valeur:any
  idlivreur:number=0
  constructor(private toastrservic:ToastrService, private livreurservice:LivreurService, private servicezone:PanierService,private route:ActivatedRoute,private livreur:LivreurService) { }
 
  ngOnInit(): void {
    this.servicezone.zone(this.id).subscribe((element:any)=>{
      element.commande.forEach((el:Icommande)=>{
       
        if(el.etat==='Valider'){
          this.tableau.push(el) 
           
           
        }
      })
    })
    this.livreur.getlivreurs().subscribe((data)=> {
      data.forEach((element:any)=>{
        if(element.etat==='disponible'){
            this.tableaux.push(element)
        }
      })
      // console.log(data);
      // this.livreurs= data
      
      // console.log(this.livreur)
    })
    // this.valeur.this.selection()
}



  

// input =(<HTMLInputElement>document.getElementById('zone'))

private commandes:commandelivreur[]=[]

  selection(commande:commandelivreur,livrer: HTMLInputElement){
    if(livrer.checked){ 
      // this.commandes.push(commande)
      // let a=this.commandes;
      // console.log(a);
      // return this.commandes 
      this.livreurservice.ajouterCommande(commande)
    }else{
      // this.commandes.splice(this.commandes.indexOf(commande),1)
      // let a=this.commandes;
      // console.log(a);
      this.livreurservice.suprimerCommande(commande)
      
      // return this.commandes
    }
      console.log(this.livreurservice.commande);
    
  }

  ajouterlivraison(){
    let tableau:commandelivreur[]=[]
    this.livreurservice.commande.forEach((c:commandelivreur)=>{
      tableau.push(c)
    })
    let livreu:commandelivreur ={
      id:this.idlivreur
   }
    let body : Ilivraison={
      montantTotal:1500,
      livreur:livreu,
      commandes: tableau

    }
    console.log(body);
    this.livreurservice.enregistrerLivraison(body)
    location.reload();
  }

 
selectionlivreur(select:HTMLSelectElement){
   this.idlivreur= +select.value

  //  console.log(this.idlivreur);
   
}
successMessage(){
  this.toastrservic.success("Livraison creer avec success")
 }
 activerbuttonlivraison(){
  if((this.idlivreur) && (this.livreurservice.commande.length > 0)){
    return false
  }else{
    return true
  }
  
 }
 

}
