import { provideState } from "@ngrx/store";
import { userFeature } from "./users/users.state";
import { EnvironmentProviders } from "@angular/core";
import { devicesFeature } from "./devices/devices.state";

export const providers: EnvironmentProviders[] = [
    provideState(userFeature),
    provideState(devicesFeature)
];

export * from './devices/devices.state'