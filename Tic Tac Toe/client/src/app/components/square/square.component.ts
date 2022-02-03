import { Component, Input, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.services';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() Value : 'X' | 'O';
  
  constructor(private webService:WebSocketService) {
    this.Value='X'
    
  }

  ngOnInit(): void {
  }

}
