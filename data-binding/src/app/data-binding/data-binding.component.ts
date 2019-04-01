import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  url:string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage:string = 'http://lorempixel.com/400/200/sports'
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;
  isMouseOut: boolean = true;
  
  nomeDoCurso:string = 'Angular';

  valorInicial: number = 15;

  constructor() { }

  getValor(){
    return 1+1;
  }

  getCurtiCurso(){
    return true;
  }


  botaoClicado(){
    alert('Botao clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseoverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  ngOnInit() {
  }

}
