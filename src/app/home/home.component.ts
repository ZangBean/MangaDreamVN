import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Autoplay, Parallax]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const splash = document.getElementById('splash') as HTMLElement | null;
      if (splash) {
        splash.style.display = 'none';
      }
    }, 4000);

    // Trigger change detection manually
    this.cdr.detectChanges();
  }
}
