import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StageComponent } from './components/pages/stage/stage.component';
import { PlayComponent } from './components/pages/play/play.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HeaderguestComponent } from './components/common/headerguest/headerguest.component';
import { AccountComponent } from './components/pages/account/account.component';
import { PokedexComponent } from './components/pages/pokedex/pokedex.component';
import { RegisterComponent } from './components/pages/register/register.component';

import { UserService } from './services/user.service';
import { StageService } from './services/stage.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StageComponent,
    PlayComponent,
    HeaderComponent,
    AccountComponent,
    PokedexComponent,
    HeaderguestComponent,
    RegisterComponent
    // components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    UserService,
    StageService
    // services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
