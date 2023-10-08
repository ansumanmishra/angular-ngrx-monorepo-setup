import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { deviceActions } from "./devices.actions";
import { catchError, filter, map, of, switchMap, withLatestFrom } from "rxjs";
import { DevicesFacadeService } from "../../services";
import { DevicesHttpService } from "../../services/devices-http.service";
import { Device } from "../../models/devices";

@Injectable()
export class DeviceEffects {
    actions$ = inject(Actions);
    devicesFacadeService = inject(DevicesFacadeService);
    deviceHttpService = inject(DevicesHttpService);

    initiateLoadDevices$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deviceActions.initiateLoadDevices),
            withLatestFrom(this.devicesFacadeService.devicesLoadingStatus),
            filter(([, loadingStatus]) => loadingStatus === 'NOT_LOADED'),
            map(() => deviceActions.loadDevices())
        )
    );

    loadDevices$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deviceActions.loadDevices),
            switchMap(() =>
                this.deviceHttpService.getDevices().pipe(
                    map((devices: Device[]) => deviceActions.loadDevicesSuccess({ devices })),
                    catchError((error: any) => of(deviceActions.loadDevicesError({ error })))
                )
            )
        )
    );
}