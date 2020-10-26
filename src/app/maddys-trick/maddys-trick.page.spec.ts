import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaddysTrickPage } from './maddys-trick.page';

describe('MadisTrickPage', () => {
  let component: MaddysTrickPage;
  let fixture: ComponentFixture<MaddysTrickPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaddysTrickPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaddysTrickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
