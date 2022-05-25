import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-room',
  templateUrl: './music-room.component.html',
  styleUrls: ['./music-room.component.css'],
})
export class MusicRoomComponent implements OnInit {
  // input from app component
  @Input() openedDoor: boolean = false;

  constructor() {}
  ngOnInit(): void {}


}
