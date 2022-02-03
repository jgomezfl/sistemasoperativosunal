import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { text } from 'express';
import { WebSocketService } from 'src/app/services/web-socket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adivanador',
  templateUrl: './adivanador.component.html',
  styleUrls: ['./adivanador.component.css']
})
export class AdivanadorComponent implements OnInit,AfterViewInit {

  @ViewChild ('canvasRefTra',{static:false}) canvasRefTra:any
  isAvailable= false;
  public width=400;
  public height=400;
  private cx:any;
  private points: Array<any> =[];
  sirve:any
  intento = {
    user: "anonymous",
    text: ""
  }

  eventName = 'send-name';
  palabra: any;
  lista:any;
  x:any
  constructor(private activated : ActivatedRoute, private webService : WebSocketService) { 
    this.webService.listen('coordinates').subscribe((data) => {
      this.lista=data
      console.log(data)
      this.sirve=this.lista
      this.write(this.lista[this.lista.length-1,this.lista[this.lista.length-1].length-2], this.lista[this.lista.length-1,this.lista[this.lista.length-1].length-1])
    })
  }

  ngOnInit(): void {
    Swal.fire({
      title: 'give yourself a cool username',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
    }).then(resultado => {
      if(resultado.value){
        this.intento.user = resultado.value
        Swal.fire(resultado.value.trim())
      }
    })
    
    this.webService.listen('palabra').subscribe((data)=>{
      this.palabra = data;
    });
  }

  sendOption(){
    if(this.intento.text == this.palabra){
      Swal.fire(('did it '+this.intento.user).trim());
      this.webService.emit(this.eventName, this.intento.user);
    }
    else{
      Swal.fire(('try to kill yourself '+this.intento.user+' please').trim());
    }
    this.intento.text = '';
  }
  ngAfterViewInit(): void {
    this.render();  
  }
  private render():any{
    const canvasEl=this.canvasRefTra.nativeElement;
    this.cx=canvasEl.getContext('2d');
    canvasEl.width=this.width;
    canvasEl.height=this.height;
    this.cx.lineWidth = 5;
    this.cx.lineCap='round';
    this.cx.strokeStyle='#000';
  }
  private write(resx:any, resy:any){
    const canvaEl: any=this.canvasRefTra.nativeElement;
  const rect = canvaEl.getBoundingClientRect();
    const prevPos ={
      x: resx + rect.left,
      y: resy + rect.top
    };
    this.writeSingle(prevPos);
    this.cx.beginPath();
    this.cx.moveTo(0,0);
    this.cx.lineTo(resx,resy);
    this.cx.stroke();
  }

  private writeSingle = (prevPos:any)=>{
      this.points.push(prevPos)
      if(this.points.length >= 3){
        const prevPost = this.points[this.points.length -1]
        const currentPos = this.points[this.points.length -2]
        this.drawOnCanvas(prevPost,currentPos);
      }
  }
  private drawOnCanvas(prevPos:any, currentPos:any){
    this.cx.beginPath();
      this.cx.moveTo(prevPos.x,prevPos.y);
      this.cx.lineTo(currentPos.x,currentPos.y);
  }
  public clearZone=()=>{
    this.lista = []
    this.points= []
    this.cx.clearRect(0,0, this.width,this.height);
  }
}