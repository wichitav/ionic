import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TriviaunoPage } from '../triviauno/triviauno';
import { IncorrectoPage } from '../incorrecto/incorrecto';
import { GanadorPage } from '../ganador/ganador';
import { TriviadosPage } from '../triviados/triviados';
import { GanadordosPage } from '../ganadordos/ganadordos';
import { TriviatresPage } from '../triviatres/triviatres';

@Component({
  selector: 'page-incorrecto',
  templateUrl: 'incorrecto.html'
})
export class IncorrectoPage {

  constructor(public navCtrl: NavController) {
  }
  goToTriviauno(params){
    if (!params) params = {};
    this.navCtrl.push(TriviaunoPage);
  }goToIncorrecto(params){
    if (!params) params = {};
    this.navCtrl.push(IncorrectoPage);
  }goToGanador(params){
    if (!params) params = {};
    this.navCtrl.push(GanadorPage);
  }goToTriviados(params){
    if (!params) params = {};
    this.navCtrl.push(TriviadosPage);
  }goToGanadordos(params){
    if (!params) params = {};
    this.navCtrl.push(GanadordosPage);
  }goToTriviatres(params){
    if (!params) params = {};
    this.navCtrl.push(TriviatresPage);
  }
}
