import { AsyncPipe, CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { DevicesFacadeService } from "projects/shared-lib/src/public-api";

@Component({
    template: `
        <ng-container *ngIf="(devicesLoadingStatus$ | async) === 'LOADING'">Loading devices...</ng-container>
        <ng-container *ngIf="(devicesLoadingStatus$ | async) === 'LOADED'">
            {{devices$ | async | json }}
        </ng-container>
        
    `,
    styles: [``],
    imports: [AsyncPipe, CommonModule],
    standalone: true
})
export class DevicesComponent implements OnInit {
    devicesFacadeService = inject(DevicesFacadeService);
    devicesLoadingStatus$ = this.devicesFacadeService.devicesLoadingStatus;
    devices$ = this.devicesFacadeService.devices$;

    ngOnInit(): void {
        // Load devices
        this.devicesFacadeService.loadDevices();
    }
}