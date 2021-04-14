import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomePageComponent} from './components/home-page/home-page.component';
import {FeaturedCreatorsComponent} from './components/featured-creators/featured-creators.component';
import {SharedModule} from '@modules/shared/shared.module';


@NgModule({
  declarations: [HomePageComponent, FeaturedCreatorsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
