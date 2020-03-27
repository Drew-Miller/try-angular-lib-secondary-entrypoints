import { Component, OnInit } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private myLibService: MyLibService) {}
  title = 'try-angular-lib-secondary-entrypoints';

  ngOnInit() {
    this.myLibService.debug();
  }
}
