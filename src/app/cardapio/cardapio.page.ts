import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage {

  tipo: string | undefined; 
  cachorrao: string | undefined;
  hamburguer: string | undefined;

  constructor(private alertCtrl: AlertController) { }

  

  

  async mostrarDescricao(lanche: string): Promise<void> {
    let descricao: string | undefined;
    let imagem: string | undefined;

    switch (lanche) {
      case 'simplesCachorrao':
        descricao = 'Cachorrão Simples: Pão, salsicha, queijo, milho, batata palha e molho especial.';
        imagem = 'assets/img/simples-cachorrao.jpg';
        break;
      case 'completoCachorrao':
        descricao = 'Cachorrão Completo: Pão, salsicha, queijo, milho, batata palha, ovo, bacon, frango desfiado, catupiry e molho especial.';
        imagem = 'assets/img/completo-cachorrao.jpg';
        break;
      case 'simplesHamburguer':
        descricao = 'Hambúrguer Simples: Pão, carne bovina, queijo, alface, tomate e molho especial.';
        imagem = 'assets/img/simples-hamburguer.jpg';
        break;
      case 'completoHamburguer':
        descricao = 'Hambúrguer Completo: Pão, carne bovina, queijo, alface, tomate, bacon, cebola, ovo e molho especial.';
        //imagem = '<img src="https://w7.pngwing.com/pngs/411/942/png-transparent-hamburger-cheeseburger-wendy-s-burger-king-food-burger-top.png"'
        imagem = 'https://w7.pngwing.com/pngs/411/942/png-transparent-hamburger-cheeseburger-wendy-s-burger-king-food-burger-top.png';
        break;
    }

    const alert = await this.alertCtrl.create({
      header: 'Descrição do Lanche',
      message: descricao,
      buttons: ['OK']
    });

    await alert.present();

    const imageModal = await this.alertCtrl.create({
      message: '<img src="' + imagem + '" />',
      buttons: ['OK']
    });

    await imageModal.present();
  }

}
