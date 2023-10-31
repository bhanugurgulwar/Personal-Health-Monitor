import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
// import { DashboardPage } from './Pages/dashboard/dashboard.page';

const routes: Routes = [
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./Pages/dashboard/dashboard.module').then(m=>m.DashboardPageModule)
      },
      {
        path: 'tasks',
        // loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'track',
        // loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./Pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'lists',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
