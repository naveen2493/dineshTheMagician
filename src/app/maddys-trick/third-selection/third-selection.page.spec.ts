import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThirdSelectionPage } from './third-selection.page';

describe('ThirdSelectionPage', () => {
  let component: ThirdSelectionPage;
  let fixture: ComponentFixture<ThirdSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdSelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
