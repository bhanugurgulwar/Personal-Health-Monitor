import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
// import { DashboardPage } from './Pages/dashboard/dashboard.page';

const routes: Routes = [
        {
          path: 'dashboard',
          loadChildren: () => import('./Pages/dashboard/dashboard.module').then(m=>m.DashboardPageModule)
        },
        // {
        //   path: 'tasks',
        //   // loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
        // },
        {
          path: 'track',
          loadChildren: () => import('./Pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
        },
        {
          path: 'profile',
          loadChildren: () => import('./Pages/profile/profile.module').then(m => m.ProfilePageModule)
        },
  {
    path: 'notifications',
    loadChildren: () => import('./Pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
        // {
        //   path: '',
        //   redirectTo: 'lists',
        //   pathMatch: 'full'
        // }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
