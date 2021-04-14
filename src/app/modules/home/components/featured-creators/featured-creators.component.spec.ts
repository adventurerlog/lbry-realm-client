import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCreatorsComponent } from './featured-creators.component';

describe('FeaturedCreatorsComponent', () => {
  let component: FeaturedCreatorsComponent;
  let fixture: ComponentFixture<FeaturedCreatorsComponent>;

  beforeEach(async () =>
    await TestBed.configureTestingModule({
      declarations: [FeaturedCreatorsComponent]
    })
      .compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
