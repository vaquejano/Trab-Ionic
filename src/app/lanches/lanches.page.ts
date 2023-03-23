import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {

  public pathImgs = '../../assets/img/';

  public lanches = {
    codigo: 0,
    nome: '',
    descricao: '',
    status: true,
    imagens: [],
    visible: false
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      this.lanches = params['lanches']
    });
   }

  ngOnInit() {
  }

}
