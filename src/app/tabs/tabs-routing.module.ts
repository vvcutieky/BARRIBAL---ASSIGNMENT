import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'',
        children:[
          {
            path:'home',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
          },
          {
            path:'message',
            loadChildren: () => import('../message/message.module').then(m => m.MessagePageModule),
          },
          {
            path:'profile',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule),
          }
        ]
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
