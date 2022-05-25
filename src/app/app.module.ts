import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WoodenDoorComponent } from './components/doors/wooden-door/wooden-door.component';
import { MusicRoomComponent } from './components/rooms/music-room/music-room.component';
import { RightHandleComponent } from './components/door-handle/right-handle/right-handle.component';

@NgModule({
  declarations: [
    AppComponent,
    WoodenDoorComponent,
    MusicRoomComponent,
    RightHandleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
