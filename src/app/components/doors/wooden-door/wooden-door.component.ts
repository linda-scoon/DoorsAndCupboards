import { style } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-wooden-door',
  templateUrl: './wooden-door.component.html',
  styleUrls: ['./wooden-door.component.css'],
})
export class WoodenDoorComponent implements OnInit {
  @Output() doorOpen = new EventEmitter<void>();

  constructor() {}
  ngOnInit(): void {}

  openDoor(): void {
    document.querySelector('.wooden-door')?.classList.add('open-door');

    this.emitDoorStatus();
  }

  emitDoorStatus(): void {
    this.doorOpen.emit();
  }
}
