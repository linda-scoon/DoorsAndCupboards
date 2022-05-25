import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openedDoor: boolean = false;

  enterRoom(): void {
    this.openedDoor = true;
  }
}
