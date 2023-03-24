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
    { codigo: 1, nome: 'Cachorrão'},
    { codigo: 2, nome: 'Hamburguers'}
    
  ]

  public pathImgs = '../../assets/img/';

  public lanches = [
    { codigo: 1, categoria: 1, descricao : 'Cachorrão Simples: Pão, salsicha, queijo, milho, batata palha e molho especial.', visibled: false, imagem: ['simples1.jpg', 'simples2.jpg'] },
    { codigo: 2, categoria: 1, descricao : 'Cachorrão Completo: Pão, salsicha, queijo, milho, batata palha, ovo, bacon, frango desfiado, catupiry e molho especial.', visibled: false, imagem: ['completo1.jpg', 'completo2.jpg']},
    { codigo: 3, categoria: 2, descricao : 'Hambúrguer Simples: Pão, carne bovina, queijo, alface, tomate e molho especial.'      , visibled: false, imagem: ['hamburgsimples1.jpg', 'hamburgsimples2.jpg']},
    { codigo: 4, categoria: 2, descricao : 'Hambúrguer Completo: Pão, carne bovina, queijo, alface, tomate, bacon, cebola, ovo e molho especial.', visibled: false, imagem: ['hamburgcompleto1.jpg', 'hamburgcompleto2.jpg']}
  ]

  public slideOpts = {
    slidesPerView: 1
  }


  route: any;



  constructor(private navCtrl: NavController) {
    this.setSelected(1);
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