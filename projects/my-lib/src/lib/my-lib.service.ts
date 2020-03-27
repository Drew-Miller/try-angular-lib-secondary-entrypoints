import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {
  constructor() {}

  debug() {
    console.log('MyLibService - debug');
  }
}
