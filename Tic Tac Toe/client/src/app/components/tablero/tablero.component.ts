import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { WebSocketService } from 'src/app/services/web-socket.services';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  room = ""
  user = ""
  squares: any =[];
  xIsnext: boolean=true;
  winner: any;
  constructor(private activated : ActivatedRoute, private webService : WebSocketService, private cookieService : CookieService) { }

  ngOnInit(): void {
    this.newGame()
    this.webService.listen('intento').subscribe((data)=>{
      const idx = data
      console.log(idx)
      this.makeMove(idx, false)
    })
    this.webService.listen('turno').subscribe((data)=>{
      if(data){
        this.xIsnext=true
        console.log(this.xIsnext)
      }
      else{
        this.xIsnext=false
        console.log(this.xIsnext)
      }
      
    }) 
    this.room = this.activated.snapshot.params['room']
    this.user = this.activated.snapshot.params['id']
    console.log(this.cookieService.get('lista'))
  }

  cookies(){
    console.log(this.cookieService.get('lista'))
  }

  @HostListener('window:beforeunload')
  onUnLoad(){
    var req = []
      var aux = ""
      for (let i of this.cookieService.get('lista').split("\n")){
        var b = i.split("_")
         for(let j of b){
          req.push(j)
        }
      }
      req.pop()
      for(var i = 0 ; i <  req.length ; i+=3){
        if(this.room == req[i]){
          if(this.user == req[i+1]){
            req[i+1] = " "
          } else if (this.user == req[i+2]){
            req[i+2] = " "
          }
        }
        aux += req[i]+"_"+req[i+1]+"_"+req[i+2]+"\n"
      }
      this.cookieService.set('lista',aux)
  }
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsnext= true;
  }
  get player(){
    return this.xIsnext ? 'X' : 'O';
  }
  makeMove(idx: any, emit = true){
    if(!this.squares[idx]){
      this.squares.splice(idx,1, this.player);
      if(emit){
        this.webService.emit('send-intento', idx)
        this.xIsnext=!this.xIsnext;
        this.webService.emit('send-turno',this.xIsnext)
      }
    }
    this.winner = this.calculateWinner();
  }
    
  calculateWinner(){
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0; i<lines.length; i++){
      const[a,b,c] =lines[i]
      if(this.squares[a] && this.squares[a] == this.squares[b] &&
      this.squares[a] == this.squares[c]){
        return this.squares[a];
      }
    }
    return null;
  }
}