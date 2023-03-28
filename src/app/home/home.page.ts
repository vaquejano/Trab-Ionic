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
    { codigo: 2, nome: 'Hamburguers'},
    { codigo: 3, nome: 'Pizza'}
    
  ]

  public pathImgs = '../../assets/img/';

  public lanches = [
    { codigo: 1, categoria: 1, preco: 'R$ 13,90', descricao : 'Cachorrão Simples: Pão, salsicha, queijo, milho, batata palha e molho especial.', visibled: false, imagem: ['simples1.jpg', 'simples2.jpg'] },
    { codigo: 1, categoria: 1, preco: 'R$ 17,00', descricao : 'Cachorrão Completo: Pão, salsicha, queijo, milho, batata palha, ovo, bacon, frango desfiado, catupiry e molho especial.', visibled: false, imagem: ['completo1.jpg', 'completo2.jpg']},
    { codigo: 2, categoria: 2, preco: 'R$ 20,00', descricao : 'Hambúrguer Simples: Pão, carne bovina, queijo, alface, tomate e molho especial.'      , visibled: false, imagem: ['hamburgsimples1.jpg', 'hamburgsimples2.jpg']},
    { codigo: 2, categoria: 2, preco: 'R$ 29,90', descricao : 'Hambúrguer Completo: Pão, carne bovina, queijo, alface, tomate, bacon, cebola, ovo e molho especial.', visibled: false, imagem: ['hamburgcompleto1.jpg', 'hamburgcompleto2.jpg']},
    { codigo: 3, categoria: 3, preco: 'R$ 32,90', descricao : 'Pizza Bahiana: carne seca, queijo, pimenta dedo de moça, cebola, ovo de codorna.', visibled: false, imagem: ['pizzabahiana1.jpg', 'pizzabahiana2.jpg']}

  ]
  
  public slideOpts = {
    slidesPerView: 2
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