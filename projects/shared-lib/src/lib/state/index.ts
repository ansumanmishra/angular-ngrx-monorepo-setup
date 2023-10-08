import { provideState } from "@ngrx/store";
import { userFeature } from "./users/users.state";
import { EnvironmentProviders } from "@angular/core";

export const sharedStateProviders: EnvironmentProviders[] = [
    provideState(userFeature),
];

export * from './devices/devices.state';
export * from './devices/devices.effects';