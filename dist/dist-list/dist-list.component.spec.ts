import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistListComponent } from './dist-list.component';

describe('DistListComponent', () => {
  let component: DistListComponent;
  let fixture: ComponentFixture<DistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
