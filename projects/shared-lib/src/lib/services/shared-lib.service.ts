import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  constructor() { }

  getName() {
    return 'hello 123';
  }
}
