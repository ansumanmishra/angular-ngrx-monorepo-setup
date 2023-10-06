import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { userFeature } from "../state/users/users.state";
import { deviceActions } from "../state/devices/devices.actions";
import { devices } from "../mock-data/devices.mock";
import { devicesFeature } from "../state";

@Injectable({providedIn: 'root'})
export class DevicesFacadeService {
    #store = inject(Store);
    
    get devices$() {
        return this.#store.select(devicesFeature.selectDevices);
    }

    loadDevices() {
        this.#store.dispatch(deviceActions.loadDevicesSuccess({devices}))
    }
}