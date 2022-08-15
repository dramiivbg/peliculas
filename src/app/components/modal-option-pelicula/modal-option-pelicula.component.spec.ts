import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalOptionPeliculaComponent } from './modal-option-pelicula.component';

describe('ModalOptionPeliculaComponent', () => {
  let component: ModalOptionPeliculaComponent;
  let fixture: ComponentFixture<ModalOptionPeliculaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalOptionPeliculaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalOptionPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
