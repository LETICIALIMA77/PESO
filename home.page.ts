import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
idade: number;
categoria: string;
res: string;
  constructor() {}
verificar(idade){
  this.idade=this.idade;
  if(idade <5 ) {
    this.categoria='menores de 5 -'+'\n'+'\nfora de classificação';
  }
else if(idade===5||idade<=7){
  this.categoria='infantil A';
}
else if(idade===8||idade<10){
  this.categoria='infantil B';
}
else if(idade===11||idade<=13){
  this.categoria='juvenil A';
}
else if(idade===14||idade<=17){
  this.categoria='infantil A';
}
else {
  this.categoria='senior';
}
}}
