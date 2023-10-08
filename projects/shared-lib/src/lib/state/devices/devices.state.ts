import { createFeature, createReducer, on } from "@ngrx/store";
import { Device } from "../../models/devices";
import { deviceActions } from "./devices.actions";

type LOADING_STATUS = 'NOT_LOADED' | 'LOADING' | 'LOADED';

interface DeviceState {
  devices: Device[]
  loading: LOADING_STATUS
}

const initialState: DeviceState = {
  devices: [],
  loading: 'NOT_LOADED'
};

const deviceReducer = createReducer(
    initialState,
    on(deviceActions.loadDevices, (state) => {
      return {
        ...state,
        loading: 'LOADING' as LOADING_STATUS
      }
    }),
    on(deviceActions.loadDevicesSuccess, (state, action) => {
      return {
        ...state,
        devices: action.devices,
        loading: 'LOADED' as LOADING_STATUS
      }
    })
);

export const devicesFeature = createFeature({
      name: 'device',
      reducer: deviceReducer
  }
)