import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterPageModule } from './pages/register/register.module';
import { RegisterPage } from './pages/register/register.page';
import { LoginPageModule } from './pages/login/login.module';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [

  {

    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }
  ,
  {
    path: 'auth/login',
    component: LoginPage
  },

  {

    path:'auth/register',
    component:RegisterPage
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }