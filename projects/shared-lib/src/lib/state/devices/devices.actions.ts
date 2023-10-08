import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Device } from "../../models/devices";

export const deviceActions = createActionGroup({
    source: 'Devices API',
    events: {
        'No Action': emptyProps(),
        'Initiate Load Devices': emptyProps(),
        'Load Devices': emptyProps(),
        'Load Devices Success': props<{devices: Device[]}>(),
        'Load Devices Error': props<{error: string}>(),
    }
});