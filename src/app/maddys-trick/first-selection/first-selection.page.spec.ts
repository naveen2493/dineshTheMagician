import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstSelectionPage } from './first-selection.page';

describe('FirstSelectionPage', () => {
  let component: FirstSelectionPage;
  let fixture: ComponentFixture<FirstSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
