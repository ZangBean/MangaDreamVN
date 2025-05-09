import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
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
  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;
  slides = [
    {
      title: 'Fate / Stay Night: Unlimited Blade Works',
      description: 'After 30 days of travel across the world...',
      image: 'https://c4.wallpaperflare.com/wallpaper/519/207/806/saitama-one-punch-man-anime-wallpaper-preview.jpg'
    },
    {
      title: 'Fate / Stay Night: Unlimited Blade Works',
      description: 'After 30 days of travel across the world...',
      image: 'https://i.pinimg.com/736x/20/4e/f2/204ef20bf4bf64f992391c0c52fcdf29.jpg'
    },
    {
      title: 'Fate / Stay Night: Unlimited Blade Works',
      description: 'After 30 days of travel across the world...',
      image: 'https://wallpapersok.com/images/hd/4k-ultra-hd-naruto-baryon-mode-flames-dxs4b3oc9nt4f7pc.jpg'
    },
    {
      title: 'Fate / Stay Night: Unlimited Blade Works',
      description: 'After 30 days of travel across the world...',
      image: 'https://c4.wallpaperflare.com/wallpaper/519/207/806/saitama-one-punch-man-anime-wallpaper-preview.jpg'
    },
    {
      title: 'Fate / Stay Night: Unlimited Blade Works',
      description: 'After 30 days of travel across the world...',
      image: 'https://i.pinimg.com/736x/20/4e/f2/204ef20bf4bf64f992391c0c52fcdf29.jpg'
    },
    {
      title: 'Fate / Stay Night: Unlimited Blade Works',
      description: 'After 30 days of travel across the world...',
      image: 'https://wallpapersok.com/images/hd/4k-ultra-hd-naruto-baryon-mode-flames-dxs4b3oc9nt4f7pc.jpg'
    }
  ];
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // Ẩn splash sau 4s
    setTimeout(() => {
      const splash = document.getElementById('splash');
      if (splash) splash.style.display = 'none';
  
      // Gọi detectChanges để đảm bảo Angular đã render
      this.cdr.detectChanges();
  
      // Chờ DOM render xong sau detectChanges
      setTimeout(() => {
        new Swiper('.swiper-container', {
          slidesPerView: 5,
          spaceBetween: 10,
          loop: true,
          autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        });
      }, 0);
    }, 4000);
  }
}
