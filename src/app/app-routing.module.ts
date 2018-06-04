import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PlayComponent } from './components/pages/play/play.component';
import { PokedexComponent } from './components/pages/pokedex/pokedex.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'play', component: PlayComponent },
    { path: 'pokedex', component: PokedexComponent },
    { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
