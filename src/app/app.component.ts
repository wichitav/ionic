import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
import { TriviaPage } from '../pages/trivia/trivia';
import { PuntosDeReciclajePage } from '../pages/puntos-de-reciclaje/puntos-de-reciclaje';
import { CamionesPage } from '../pages/camiones/camiones';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToMiPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MiPerfilPage);
  }goToTrivia(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TriviaPage);
  }goToPuntosDeReciclaje(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PuntosDeReciclajePage);
  }goToCamiones(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CamionesPage);
  }
}
