import { EventEmitter, Injectable, Output } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable, Subscriber } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { eventNames } from 'process';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket : any;
  server = 'http://localhost:3000'
  @Output() outEven: EventEmitter<any>= new EventEmitter(); 

  constructor() {
    this.socket = io.io(this.server);
  }

  listen(eventName: String){
    return new Observable((Subscriber) =>{
      this.socket.on(eventName, (data: any)=>{
        Subscriber.next(data);
      })
    });
  }

  emit(eventName: String, data:any){
    this.socket.emit(eventName, data);
  }
}
