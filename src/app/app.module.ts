import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MiPerfilPage } from '../pages/mi-perfil/mi-perfil';
import { LoginPage } from '../pages/login/login';
import { TriviaPage } from '../pages/trivia/trivia';
import { Trivia2Page } from '../pages/trivia2/trivia2';
import { PuntosDeReciclajePage } from '../pages/puntos-de-reciclaje/puntos-de-reciclaje';
import { CamionesPage } from '../pages/camiones/camiones';
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MiPerfilPage,
    LoginPage,
    TriviaPage,
    Trivia2Page,
    PuntosDeReciclajePage,
    CamionesPage,
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
    TriviaPage,
    Trivia2Page,
    PuntosDeReciclajePage,
    CamionesPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}