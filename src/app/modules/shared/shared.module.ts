import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatorSearchComponent } from './components/creator-search/creator-search.component';
import { CreatorCardComponent } from './components/creator-card/creator-card.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    CreatorSearchComponent,
    CreatorCardComponent//
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
  exports: [
    MenuComponent,
    FooterComponent,
    CreatorSearchComponent,
    CreatorCardComponent
  ]
})
export class SharedModule { }
