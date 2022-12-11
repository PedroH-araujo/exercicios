import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo:string = "disable"
  corFundo:string = "red"
  corDaFonte:string = "yellow"
  item:string = ""
  lista:string[] = []
  isEnableBlock:boolean = true

  trocar(){
    if(this.estilo == "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }

  removerLista(i:number){
    this.lista.splice(i,1)
  }

  adicionarLista(){
    this.lista.push(this.item)
  }



  constructor() { }

  ngOnInit(): void {
  }

  
}
