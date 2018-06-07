import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PlayComponent } from './components/pages/play/play.component';
import { PokedexComponent } from './components/pages/pokedex/pokedex.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AuthUserGuard } from './guards/auth.user.guard';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthUserGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'play/:stageId', component: PlayComponent, canActivate: [AuthUserGuard]},
    { path: 'pokedex', component: PokedexComponent, canActivate: [AuthUserGuard]},
    { path: '**', redirectTo: 'login', canActivate: [AuthUserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
