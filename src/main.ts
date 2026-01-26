import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeuix/themes/aura';


bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    ...appConfig.providers,
    provideAnimationsAsync(),   // ✅ modern, no deprecation
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })]
})
  .catch((err) => console.error(err));
