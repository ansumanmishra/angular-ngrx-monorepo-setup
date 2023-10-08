import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { deviceActions } from "../state/devices/devices.actions";
import { devicesFeature } from "../state";

@Injectable({providedIn: 'root'})
export class DevicesFacadeService {
    #store = inject(Store);
    
    get devices$() {
        return this.#store.select(devicesFeature.selectDevices);
    }

    loadDevices() {        
        this.#store.dispatch(deviceActions.initiateLoadDevices())
    }

    get devicesLoadingStatus() {
        return this.#store.select(devicesFeature.selectLoading);
    }
}