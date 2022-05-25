import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-handle',
  templateUrl: './right-handle.component.html',
  styleUrls: ['./right-handle.component.css'],
})
export class RightHandleComponent implements OnInit {
  @Output() doorOpening = new EventEmitter<void>();

  constructor() {}
  ngOnInit(): void {}

  openDoor(): void {
    this.doorOpening.emit();
  }
}
