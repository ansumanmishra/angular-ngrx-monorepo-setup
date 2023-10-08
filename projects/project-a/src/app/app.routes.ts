import { Routes } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState } from "@ngrx/store";
import * as devicesState from "projects/shared-lib/src/public-api";

export const routes: Routes = [
    {
        path: 'devices',
        loadComponent: () => import('./devices/devices.component').then(mod => mod.DevicesComponent),
        providers: [
            provideState(devicesState.devicesFeature),
            provideEffects(devicesState.DeviceEffects)
        ]
    }
  ];
  