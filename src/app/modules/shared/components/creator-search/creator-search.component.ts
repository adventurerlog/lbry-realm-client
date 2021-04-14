import {Component, OnInit} from '@angular/core';
import {CreatorSearchResult} from '@models/creator-search-result.model';

@Component({
  selector: 'app-creator-search',
  templateUrl: './creator-search.component.html',
  styleUrls: ['./creator-search.component.scss']
})
export class CreatorSearchComponent implements OnInit {
  searchTerm!: string;
  searchResults: CreatorSearchResult[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  lookupCreators(event: any, creatorsListSearchStart: HTMLElement): void {
    console.log('lookup creators: ', this.searchTerm);
    if (!!this.searchTerm) {
      this.searchResults = [];
      let num = this.getRandomInt(1, 5);
      for (let i = 0; i < num; i++) {
        this.searchResults.push(
          {
            name: 'Mr. Meeseks',
            description: 'I\'m mr meeseks look at me!',
            imageUrl: 'https://thumbnails.lbry.com/UCwow4CXdvIfGj126J10LN3w',
            pageLink: ''
          }
        );
      }
      setTimeout(() => {
        creatorsListSearchStart.scrollIntoView({ block: 'end',  behavior: 'smooth' });
      }, 200);
    }
  }
}
