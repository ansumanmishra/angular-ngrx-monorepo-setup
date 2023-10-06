import { createFeature, createReducer, on } from "@ngrx/store";
import { Device } from "../../models/devices";
import { deviceActions } from "./devices.actions";

interface DeviceState {
  devices: Device[]
}

const initialState: DeviceState = {
  devices: []
};

const deviceReducer = createReducer(
    initialState,
    on(deviceActions.loadDevicesSuccess, (state, action) => {
      return {
        ...state,
        devices: action.devices
      }
    })
);

export const devicesFeature = createFeature({
      name: 'device',
      reducer: deviceReducer
  }
)