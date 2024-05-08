import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachblogComponent } from './eachblog.component';

describe('EachblogComponent', () => {
  let component: EachblogComponent;
  let fixture: ComponentFixture<EachblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EachblogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EachblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
