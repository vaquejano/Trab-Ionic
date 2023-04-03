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
    { codigo: 1, categoria: 1, preco: 'R$ 13,90', nome: 'Cachorrão Simples', descricao : 'Ingredientes: Pão, uma salsicha, milho, batata palha e molho especial.', visibled: false, imagem: ['simples1.jpg', 'simples2.jpg'] },
    { codigo: 1, categoria: 1, preco: 'R$ 17,00', nome: 'Cachorrão Duplo', descricao : 'Ingredientes: Pão, duas salsichas, milho, batata palha, catupiry e molho especial.', visibled: false, imagem: ['completo1.jpg', 'completo2.jpg']},
    { codigo: 1, categoria: 1, preco: 'R$ 19,00', nome: 'Cachorrão de Frango', descricao : 'Ingredientes: Pão, frango desfiado, uma salsicha, milho, batata palha, catupiry e molho especial.', visibled: false, imagem: ['frango1.jpg', 'frango2.jpg']},
    { codigo: 2, categoria: 2, preco: 'R$ 20,00', nome: 'Hamburguer Simples', descricao : 'Ingredientes: Pão, carne bovina, queijo, alface, tomate e molho especial.'      , visibled: false, imagem: ['hamburgsimples1.jpg', 'hamburgsimples2.jpg']},
    { codigo: 2, categoria: 2, preco: 'R$ 29,90', nome: 'Hamburguer Completo', descricao : 'Ingredientes: Pão, carne bovina, queijo, alface, tomate, bacon, cebola, ovo e molho especial.', visibled: false, imagem: ['hamburgcompleto1.jpg', 'hamburgcompleto2.jpg']},
    { codigo: 3, categoria: 3, preco: 'R$ 32,90', nome: 'Pizza Baiana', descricao : 'Ingredientes: Molho de tomate, queijo, carne seca, pimenta dedo de moça, cebola, ovo de codorna.', visibled: false, imagem: ['pizzabahiana1.jpg', 'pizzabahiana2.jpg']}

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