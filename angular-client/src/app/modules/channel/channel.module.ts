import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelPageComponent } from './components/channel-page/channel-page.component';



@NgModule({
  declarations: [ChannelPageComponent],
  imports: [
    CommonModule,
    ChannelRoutingModule
  ]
})
export class ChannelModule { }
