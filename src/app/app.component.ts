import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
<<<<<<< HEAD
import { TriviaunoPage } from '../pages/triviauno/triviauno';
import { IncorrectoPage } from '../pages/incorrecto/incorrecto';
import { GanadorPage } from '../pages/ganador/ganador';
import { TriviadosPage } from '../pages/triviados/triviados';
import { GanadordosPage } from '../pages/ganadordos/ganadordos';
import { TriviatresPage } from '../pages/triviatres/triviatres';
=======
import { TriviaPage } from '../pages/trivia/trivia';
>>>>>>> 5c537ac18a178c56174f2d1acf4f99a5455e8921
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
<<<<<<< HEAD
  }goToTriviauno(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TriviaunoPage);
  }goToIncorrecto(params){
    if (!params) params = {};
    this.navCtrl.setRoot(IncorrectoPage);
  }goToGanador(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GanadorPage);
  }goToTriviados(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TriviadosPage);
  }goToGanadordos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GanadordosPage);
  }goToTriviatres(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TriviatresPage);
=======
  }goToTrivia(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TriviaPage);
>>>>>>> 5c537ac18a178c56174f2d1acf4f99a5455e8921
  }goToPuntosDeReciclaje(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PuntosDeReciclajePage);
  }goToCamiones(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CamionesPage);
  }
}
