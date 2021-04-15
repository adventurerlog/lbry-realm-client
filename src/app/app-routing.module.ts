import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from "../environments/environment";

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'signup', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)},
  {path: 'channel', loadChildren: () => import('./modules/channel/channel.module').then(m => m.ChannelModule)},
  {path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'profile', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

if (!environment.production) {
  routes.push({
    path: 'showcase',
    loadChildren: () => import('./modules/showcase/showcase.module').then(m => m.ShowcaseModule)
  });
  console.log('Added showcase!');
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
