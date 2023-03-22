import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cachorrao: string | undefined;
  hamburguer: string | undefined;


  public segment = '0';

  public lanches : any = [
    { descricao : 'Funcionários', icone: 'people' },
    { descricao : 'Despesas'    , icone: 'cash'   },
    { descricao : 'Vendas'      , icone: 'cart'   },
    { descricao : 'Promoções'   , icone: 'ticket' }
  ]
  alertCtrl: any;


  constructor() {}

  async mostrarDescricao(lanche: string): Promise<void> {
    let descricao: string | undefined;
    let imagem: string | undefined;




const alert = await this.alertCtrl.create({
  header: 'Descrição do Lanche',
  message: descricao,
  buttons: ['OK']
});
}

}