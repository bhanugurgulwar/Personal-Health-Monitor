import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { DashboardPage } from './Pages/dashboard/dashboard.page';
// import { DashboardPage } from './Pages/dashboard/dashboard.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix', //default
    redirectTo: 'home',
  },
  {
    path: '',
    component:TabsPage,
    // loadChildren: () =>
    //   import('../tabs/tabs.module').then(
    //     (m) => m.TabsPageModule
    //   ),
      children:[
          {
            path: 'home',
            loadChildren: () =>
              import('./Pages/dashboard/dashboard.module').then(
                (m) => m.DashboardPageModule
              ),
          },
        {
          path: 'track',
          loadChildren: () =>
            import('./Pages/notifications/notifications.module').then(
              (m) => m.NotificationsPageModule
            ),
        },
        {
          path: 'profile',
          loadChildren: () =>
            import('./Pages/profile/profile.module').then((m) => m.ProfilePageModule),
        },
        {
          path: 'notifications',
          loadChildren: () =>
            import('./Pages/notifications/notifications.module').then(
              (m) => m.NotificationsPageModule
            ),
        },
      ]
  },
  // {
  //   path: 'tasks',
  //   // loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  // },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
