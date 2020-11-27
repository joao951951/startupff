import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class registroPage implements OnInit {
  
  id:string;
  api="http://localhost/";
  contato = {
    "id": 0,
    "nome": "",
    "cpf": "",
    "email": "",
    "senha": ""
    };
  constructor(private http:HttpClient,
      private navCtrl:NavController) { }

  ngOnInit() {
  }
  presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Erro';
    alert.message = 'Não deixe campos vazios';
    alert.buttons = ['OK'];
   
    document.body.appendChild(alert);
    return alert.present();
  }

  gravar(){
    if(this.contato.nome !="" || this.contato.senha != "" || this.contato.cpf != || this.contato.email !=""){
      this.http.post<any>(this.api+"inclusao.php",
         this.contato)
      .subscribe( dados => {
        this.navCtrl.navigateBack('/escolha');
      });
  }else{
    this.presentAlert();
    
  }
}
}
