import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaddysResultPage } from './maddys-result.page';

describe('MaddysResultPage', () => {
  let component: MaddysResultPage;
  let fixture: ComponentFixture<MaddysResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaddysResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaddysResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
