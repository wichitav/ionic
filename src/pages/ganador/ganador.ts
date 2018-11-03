import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TriviadosPage } from '../triviados/triviados';
import { IncorrectoPage } from '../incorrecto/incorrecto';
import { TriviaunoPage } from '../triviauno/triviauno';
import { GanadordosPage } from '../ganadordos/ganadordos';
import { TriviatresPage } from '../triviatres/triviatres';

@Component({
  selector: 'page-ganador',
  templateUrl: 'ganador.html'
})
export class GanadorPage {

  constructor(public navCtrl: NavController) {
  }
  goToTriviados(params){
    if (!params) params = {};
    this.navCtrl.push(TriviadosPage);
  }goToIncorrecto(params){
    if (!params) params = {};
    this.navCtrl.push(IncorrectoPage);
  }goToTriviauno(params){
    if (!params) params = {};
    this.navCtrl.push(TriviaunoPage);
  }goToGanador(params){
    if (!params) params = {};
    this.navCtrl.push(GanadorPage);
  }goToGanadordos(params){
    if (!params) params = {};
    this.navCtrl.push(GanadordosPage);
  }goToTriviatres(params){
    if (!params) params = {};
    this.navCtrl.push(TriviatresPage);
  }
}
