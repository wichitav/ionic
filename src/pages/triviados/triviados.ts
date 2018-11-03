import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IncorrectoPage } from '../incorrecto/incorrecto';
import { TriviaunoPage } from '../triviauno/triviauno';
import { GanadorPage } from '../ganador/ganador';
import { TriviadosPage } from '../triviados/triviados';
import { GanadordosPage } from '../ganadordos/ganadordos';
import { TriviatresPage } from '../triviatres/triviatres';

@Component({
  selector: 'page-triviados',
  templateUrl: 'triviados.html'
})
export class TriviadosPage {

  constructor(public navCtrl: NavController) {
  }
  goToIncorrecto(params){
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
  }goToTriviatres(params){
    if (!params) params = {};
    this.navCtrl.push(TriviatresPage);
  }
}
