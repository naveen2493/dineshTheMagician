import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScratchCardPage } from './scratch-card.page';

describe('ScratchCardPage', () => {
  let component: ScratchCardPage;
  let fixture: ComponentFixture<ScratchCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScratchCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScratchCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
