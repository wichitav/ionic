import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
import { LoginPage } from '../pages/login/login';
<<<<<<< HEAD
import { GanadorPage } from '../pages/ganador/ganador';
import { GanadordosPage } from '../pages/ganadordos/ganadordos';
import { GanadortresPage } from '../pages/ganadortres/ganadortres';
import { IncorrectoPage } from '../pages/incorrecto/incorrecto';
import { TriviaunoPage } from '../pages/triviauno/triviauno';
import { TriviadosPage } from '../pages/triviados/triviados';
import { TriviatresPage } from '../pages/triviatres/triviatres';
import { TriviacuatroPage } from '../pages/triviacuatro/triviacuatro';
import { PuntosDeReciclajePage } from '../pages/puntos-de-reciclaje/puntos-de-reciclaje';
import { CamionesPage } from '../pages/camiones/camiones';
import { PremiosPage } from '../pages/premios/premios';
import { EscanerPage } from '../pages/escaner/escaner';
=======
import { TriviaPage } from '../pages/trivia/trivia';
import { Trivia2Page } from '../pages/trivia2/trivia2';
import { PuntosDeReciclajePage } from '../pages/puntos-de-reciclaje/puntos-de-reciclaje';
import { CamionesPage } from '../pages/camiones/camiones';
>>>>>>> 5c537ac18a178c56174f2d1acf4f99a5455e8921
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MiPerfilPage,
    LoginPage,
<<<<<<< HEAD
    GanadorPage,
    GanadordosPage,
    GanadortresPage,
    IncorrectoPage,
    TriviaunoPage,
    TriviadosPage,
    TriviatresPage,
    TriviacuatroPage,
    PuntosDeReciclajePage,
    CamionesPage,
    PremiosPage,
    EscanerPage,
=======
    TriviaPage,
    Trivia2Page,
    PuntosDeReciclajePage,
    CamionesPage,
>>>>>>> 5c537ac18a178c56174f2d1acf4f99a5455e8921
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MiPerfilPage,
    LoginPage,
<<<<<<< HEAD
    GanadorPage,
    GanadordosPage,
    GanadortresPage,
    IncorrectoPage,
    TriviaunoPage,
    TriviadosPage,
    TriviatresPage,
    TriviacuatroPage,
    PuntosDeReciclajePage,
    CamionesPage,
    PremiosPage,
    EscanerPage,
=======
    TriviaPage,
    Trivia2Page,
    PuntosDeReciclajePage,
    CamionesPage,
>>>>>>> 5c537ac18a178c56174f2d1acf4f99a5455e8921
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}