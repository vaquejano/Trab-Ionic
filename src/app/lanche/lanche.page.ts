import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.page.html',
  styleUrls: ['./lanche.page.scss'],
})
export class LanchePage implements OnInit {
  
  public pathImgs = '../../assets/img/';

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

  ngOnInit() {
  }

}
