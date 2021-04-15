import {Component, Input, OnInit} from '@angular/core';
import {CreatorSearchResult} from '@models/creator-search-result.model';

@Component({
  selector: 'app-creator-card',
  templateUrl: './creator-card.component.html',
  styleUrls: ['./creator-card.component.scss']
})
export class CreatorCardComponent implements OnInit {

  @Input() data: CreatorSearchResult;
  @Input() index: number;

  constructor() {
  }

  get creatorClass(): string {
    return this.index === 0 ? 'no-top-margin' : 'yes-top-margin';
  }

  ngOnInit(): void {
    console.log(this.data, this.index);
  }

}
