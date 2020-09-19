import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolhaPage } from './escolha.page';

describe('EscolhaPage', () => {
  let component: EscolhaPage;
  let fixture: ComponentFixture<EscolhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
