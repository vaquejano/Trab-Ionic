import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.page.html',
  styleUrls: ['./lanche.page.scss'],
})
export class LanchePage  {
  
  public pathImgs = '../../assets/img/';

  public quantidade = 0;

  public lanche = {
    codigo: 0,
    categoria: 0,
    nome: '',
    descricao: '',
    preco: 0,
    imagem: [],
    visibled: false
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      this.lanche = params['lanche']
    });
   }




   public add(){
    this.quantidade += 1;
  }

  public remove(){
    if(this.quantidade > 0){
      this.quantidade -= 1;
    }
  }

}
