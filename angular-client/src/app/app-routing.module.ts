import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from "../environments/environment";

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)},
  {path: 'channel', loadChildren: () => import('./modules/channel/channel.module').then(m => m.ChannelModule)},
  {path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'profile', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {
    path: 'showcase',
    loadChildren: () => import('./modules/showcase/showcase.module').then(m => m.ShowcaseModule)
  }
];
//
// if (!environment.production) {
//   routes.push({
//     path: 'showcase',
//     loadChildren: () => import('./modules/showcase/showcase.module').then(m => m.ShowcaseModule)
//   });
//   console.log('Added showcase');
//   console.log(routes);
// }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
