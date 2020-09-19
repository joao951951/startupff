import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FimPage } from './fim.page';

describe('FimPage', () => {
  let component: FimPage;
  let fixture: ComponentFixture<FimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
