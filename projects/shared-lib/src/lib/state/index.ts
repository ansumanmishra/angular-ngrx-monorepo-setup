import { provideState } from "@ngrx/store";
import { userFeature } from "./user/user.state";
import { EnvironmentProviders } from "@angular/core";
import { deviceFeature } from "./device/device.state";

export const providers: EnvironmentProviders[] = [
    provideState(userFeature),
    provideState(deviceFeature)
];

export * from './device/device.state'