import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibTestingService {
  constructor() {}

  debug() {
    console.log('MyLibTestingService - debug');
  }
}
