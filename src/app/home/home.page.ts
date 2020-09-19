import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  contato = {
    "email": "",
    "senha": ""
    };

  api="http://localhost/consulta.php";

  constructor( private http:HttpClient,
    private navCtrl: NavController) {}

  ngOnInit(){
    
  };

  };
