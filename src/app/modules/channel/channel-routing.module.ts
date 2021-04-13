import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChannelPageComponent} from './components/channel-page/channel-page.component';


const routes: Routes = [
  {path: '', component: ChannelPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule {
}
