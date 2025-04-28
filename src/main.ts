import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
.catch(err => console.error(err));

// Thêm hiệu ứng sparkle bằng TS
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('sparkle-container');
  if (!container) return;

  window.addEventListener('mousemove', (e: MouseEvent) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    container.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  });
});
