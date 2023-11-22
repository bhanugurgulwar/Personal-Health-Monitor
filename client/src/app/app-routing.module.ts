import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterPageModule } from './auth/register/register.module';
import { RegisterPage } from './auth/register/register.page';
import { LoginPageModule } from './auth/login/login.module';
import { LoginPage } from './auth/login/login.page';
import { TabsPageModule } from './tabs/tabs.module';
import authGuard, { authGuardLogin } from './shared/services/auth.guard';

const routes: Routes = [

  {

    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  }
  ,
  {
    path: 'auth/login',
    component: LoginPage,
    canActivate:[authGuardLogin]
  },

  {

    path:'auth/register',
    component:RegisterPage,
    canActivate:[authGuardLogin]
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then(
        (m) => m.TabsPageModule
      ),
    canActivate:[authGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
