import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LaddaModule } from 'angular2-ladda';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';

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
import { GameService } from './services/game.service';
import { MiscService } from './services/misc.service';
import { AuthService } from './services/auth.service';

import { AuthUserGuard } from './guards/auth.user.guard';
import { RequestInterceptorsProviders } from './middlewares/request/request-interceptors';

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
    RouterModule,
    CommonModule,
    LaddaModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    UserService,
    GameService,
    MiscService,
    AuthService,
    AuthUserGuard,
    // services
    RequestInterceptorsProviders
    // middleware
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
