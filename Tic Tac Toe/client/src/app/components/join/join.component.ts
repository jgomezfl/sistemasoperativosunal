import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { WebSocketService } from 'src/app/services/web-socket.services';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  Request = {
    user: "",
    sala: ""
  }

  Salas = ["Microsoft","IBM","Oracle","SAP","Adobe","Apple","Minix"]

  constructor(private router : Router, private webService : WebSocketService, private cookieService : CookieService) { }

  ngOnInit(): void {
  }


  Ingresar(){
    
    /* var aux = ""
    for(let i of this.Salas){
      aux += i+"_ _ "+"\n"
    }
    this.cookieService.set('lista',aux)
    console.log(this.cookieService.get('lista')) */

    if(this.Request.user == "" || this.Request.sala == ""){
      Swal.fire("Sorry there is an empty space");
    }else{
      var a = true;
      var req = []
      var aux = ""
      for (let i of this.cookieService.get('lista').split("\n")){
        var b = i.split("_")
         for(let j of b){
          req.push(j)
        }
      }
      req.pop()
      console.log(req)
      for(var i = 0 ; i <  req.length ; i+=3){
        if(this.Request.sala == req[i]){
          if(req[i+1] == this.Request.user || req[i+2] == this.Request.user){
            Swal.fire("Sorry the name is already used in room".trim())
            a = false;
          } else if(req[i+1] == " "){
            req[i+1] = this.Request.user
          } else if(req[i+2] == " "){
            req[i+2] = this.Request.user
          }else{
            a = false;
            Swal.fire("Sorry this room is full")
          }
        }
        aux += req[i]+"_"+req[i+1]+"_"+req[i+2]+"\n"
      }
      this.cookieService.set('lista',aux)
      if(a){
        this.router.navigateByUrl('juego/'+this.Request.sala+'/'+this.Request.user)
      }
      console.log(this.cookieService.get('lista'))
    } 
  }

}