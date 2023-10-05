import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { providers } from 'projects/shared-lib/src/public-api';


bootstrapApplication(AppComponent, {
    providers: [
      provideStore(),
      ...providers,
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
})
  .catch(err => console.error(err));
