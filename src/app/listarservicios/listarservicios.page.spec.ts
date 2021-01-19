import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarserviciosPage } from './listarservicios.page';

describe('ListarserviciosPage', () => {
  let component: ListarserviciosPage;
  let fixture: ComponentFixture<ListarserviciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarserviciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarserviciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
