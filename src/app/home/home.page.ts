import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  public pathImgs = '../../assets/img/';

  public segment = '0';

  public lanche = [
    { codigo: 1, nome: 'Cachorrão Simples', descricao : 'Cachorrão Simples: Pão, salsicha, queijo, milho, batata palha e molho especial.uncionários', status: true, visible: true},
    { codigo: 2, nome: 'Cachorrão Completo', descricao : 'Cachorrão Completo: Pão, salsicha, queijo, milho, batata palha, ovo, bacon, frango desfiado, catupiry e molho especial.', status: true, visible: true},
    { codigo: 3, nome: 'Hamburguer Simples', descricao : 'Hambúrguer Simples: Pão, carne bovina, queijo, alface, tomate e molho especial.'      , status: true, visible: true},
    { codigo: 4, nome: 'Hamburguer Completo', descricao : 'Hambúrguer Completo: Pão, carne bovina, queijo, alface, tomate, bacon, cebola, ovo e molho especial.', status: true, visible: true}
  ]

  route: any;

  constructor(private navCtrl: NavController) {
    
  }

  public goLanches(lanches:any){
    this.navCtrl.navigateForward('lanches',{
      queryParams: { lanches: lanches}
    });
  }

}