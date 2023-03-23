import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public selected = 0;

  public categs = [
    { codigo: 1, nome: 'Cachorrão Simples'},
    { codigo: 2, nome: 'Cachorrão Completo'},
    { codigo: 3, nome: 'Hamburguer Simples'},
    { codigo: 4, nome: 'Hamburguer Completo'}
  ]

  public pathImgs = '../../assets/img/';

  public segment = '0';

  public lanches = [
    { codigo: 1, categoria: 1, descricao : 'Cachorrão Simples: Pão, salsicha, queijo, milho, batata palha e molho especial.uncionários', status: true, visibled: true, imagem: ['1simples', '1simples'] },
    { codigo: 2, categoria: 1, descricao : 'Cachorrão Completo: Pão, salsicha, queijo, milho, batata palha, ovo, bacon, frango desfiado, catupiry e molho especial.', status: true, visibled: true, imagem: ['1completo', '1completo']},
    { codigo: 3, categoria: 2, descricao : 'Hambúrguer Simples: Pão, carne bovina, queijo, alface, tomate e molho especial.'      , status: true, visibled: true, imagem: ['2hamburguer', '2hamburguer']},
    { codigo: 4, categoria: 2, descricao : 'Hambúrguer Completo: Pão, carne bovina, queijo, alface, tomate, bacon, cebola, ovo e molho especial.', status: true, visibled: true, imagem: ['2completo', '2completo']}
  ]

  route: any;

  constructor(private navCtrl: NavController) {
    
  }

  public goLanche(lanche:any){
    this.navCtrl.navigateForward('lanche',{
      queryParams: { lanche: lanche}
    });
  }

  public setSelected(codigoCategoria: number) {
    this.selected = codigoCategoria;

    this.lanches.map(el => el.visibled = false);

    this.lanches
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

}