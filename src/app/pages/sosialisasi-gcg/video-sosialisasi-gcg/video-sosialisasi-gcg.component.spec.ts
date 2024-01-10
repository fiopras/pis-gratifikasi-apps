import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoSosialisasiGcgComponent } from './video-sosialisasi-gcg.component';

describe('VideoSosialisasiGcgComponent', () => {
  let component: VideoSosialisasiGcgComponent;
  let fixture: ComponentFixture<VideoSosialisasiGcgComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSosialisasiGcgComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoSosialisasiGcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
