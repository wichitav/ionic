import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TriviatresPage } from '../triviatres/triviatres';
import { IncorrectoPage } from '../incorrecto/incorrecto';
import { TriviaunoPage } from '../triviauno/triviauno';
import { GanadorPage1 } from '../ganador/ganador';
import { TriviadosPage } from '../triviados/triviados';

@Component({
  selector: 'page-ganadordos',
  templateUrl: 'ganadordos.html'
})
export class GanadordosPage {

  constructor(public navCtrl: NavController) {
  }
  goToTriviatres(params){
    if (!params) params = {};
    this.navCtrl.push(TriviatresPage);
  }goToIncorrecto(params){
    if (!params) params = {};
    this.navCtrl.push(IncorrectoPage);
  }goToTriviauno(params){
    if (!params) params = {};
    this.navCtrl.push(TriviaunoPage);
  }goToGanador(params){
    if (!params) params = {};
    this.navCtrl.push(GanadorPage);
  }goToTriviados(params){
    if (!params) params = {};
    this.navCtrl.push(TriviadosPage);
  }goToGanadordos(params){
    if (!params) params = {};
    this.navCtrl.push(GanadordosPage);
  }
}
