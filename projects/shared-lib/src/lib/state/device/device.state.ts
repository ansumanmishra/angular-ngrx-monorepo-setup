import { createFeature, createReducer, on } from "@ngrx/store";

export interface Device {
    name: string;
    id: number;
  }

const initialState: Device = {
    name: 'Router',
    id: 123,
  };


    export const deviceReducer = createReducer(
        initialState,
    );

  export const deviceFeature = createFeature({
        name: 'device',
        reducer: deviceReducer
    }
  )