import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecondSelectionPage } from './second-selection.page';

describe('SecondSelectionPage', () => {
  let component: SecondSelectionPage;
  let fixture: ComponentFixture<SecondSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondSelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
