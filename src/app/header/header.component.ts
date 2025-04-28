import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      const eyes = document.querySelectorAll<HTMLElement>('.eye');

      eyes.forEach(eye => {
        const pupil = eye.querySelector<HTMLElement>('.pupil');
        if (!pupil) return;

        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);

        const radius = 6;
        const moveX = Math.cos(angle) * radius;
        const moveY = Math.sin(angle) * radius;

        pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });

    // Gọi hàm blink lần đầu
    setTimeout(() => this.randomBlink(), 2000);
  }

  private randomBlink(): void {
    const eyes = document.querySelectorAll<HTMLElement>('.eye');

    eyes.forEach(eye => {
      eye.classList.add('blink');
      setTimeout(() => {
        eye.classList.remove('blink');
      }, 200);
    });

    const nextBlink = Math.random() * 5000 + 1000; // từ 1 đến 6 giây
    setTimeout(() => this.randomBlink(), nextBlink);
  }
}
