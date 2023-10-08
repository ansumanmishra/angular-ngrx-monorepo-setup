import { Injectable, inject } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Device } from "../models/devices";
import { devices } from "../mock-data/devices.mock";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class DevicesHttpService {
    private http = inject(HttpClient);

    getDevices(): Observable<Device[]> {
        return of(devices).pipe(delay(2000));
    }
}