import { Component, OnInit } from '@angular/core';
import { SharedLibService } from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'project-a';

  constructor(private readonly sharedLib: SharedLibService) {

  }

  ngOnInit() {
    const name = this.sharedLib.getName();
    console.log(name);
    
  }
}
