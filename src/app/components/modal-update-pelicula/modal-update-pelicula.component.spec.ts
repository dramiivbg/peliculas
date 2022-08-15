import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalUpdatePeliculaComponent } from './modal-update-pelicula.component';

describe('ModalUpdatePeliculaComponent', () => {
  let component: ModalUpdatePeliculaComponent;
  let fixture: ComponentFixture<ModalUpdatePeliculaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdatePeliculaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalUpdatePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
