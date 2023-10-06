import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DevicesFacadeService } from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, AsyncPipe]
})
export class AppComponent implements OnInit {
  title = 'project-a';
  devices$ = this.devicesFacadeService.devices$;

  constructor(private readonly devicesFacadeService: DevicesFacadeService) {

  }

  ngOnInit() {
     // Load devices
     this.devicesFacadeService.loadDevices();   
  }
}
