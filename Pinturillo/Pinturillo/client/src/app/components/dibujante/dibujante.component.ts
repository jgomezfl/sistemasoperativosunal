import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from 'src/app/services/web-socket.service';


@Component({
  selector: 'app-dibujante',
  templateUrl: './dibujante.component.html',
  styleUrls: ['./dibujante.component.css']
})
export class DibujanteComponent implements OnInit, AfterViewInit {

  @ViewChild ('canvasRef',{static:false}) canvasRef:any
  isAvailable= false;
  public width=400;
  public height=400;
  private cx:any;
  private points: Array<any> =[];
  private pos : any =[]
  @HostListener ('document:mousemove', ['$event'])
  onMouseMove=(e:any)=>{
    if(e.target.id=='canvasId' && (this.isAvailable)){
      console.log(e)
      this.write(e)
    }
  }
  @HostListener('click', ['$event'])
  onClick=(e:any)=>{
    if(e.target.id =='canvasId'){
      this.isAvailable=!this.isAvailable
    }
  }
  palabras = ["hogar","transporte","mascota","estudio","diversión",
  "lazos","tecnología","comida","deporte"]

  index = 0;
  palabra = "";
  
  eventName = 'send-palabra';
  lista: any;
  winner:any = "";

  constructor(private activate : ActivatedRoute, private webService : WebSocketService) { 
    
  }

  ngOnInit(): void {
    this.index = Math.floor(Math.random() * (this.palabras.length-0))+0;
    this.palabra = this.palabras[this.index];
    this.webService.emit(this.eventName, this.palabra);
    
    this.webService.listen('name').subscribe((data)=>{
      this.winner = data;
    });
    
  }
  ngAfterViewInit(): void {
    this.render();
}
private render():any{
  const canvasEl=this.canvasRef.nativeElement;
  this.cx=canvasEl.getContext('2d');
  canvasEl.width=this.width;
  canvasEl.height=this.height;
  this.cx.lineWidth = 5;
  this.cx.lineCap='round';
  this.cx.strokeStyle='#000';
}
private write(res:any){
  const canvaEl: any=this.canvasRef.nativeElement;
  const rect = canvaEl.getBoundingClientRect();
  const prevPos ={
    x: res.clientX - rect.left,
    y: res.clientY - rect.top
  };
  this.writeSingle(prevPos);
}
private writeSingle = (prevPos:any)=>{
    this.points.push(prevPos);
    const prevPost = this.points[this.points.length -1]
    const currentPos = this.points[this.points.length -2]
    this.drawOnCanvas(prevPost,currentPos);
    const prevPostx = parseInt(prevPost.x)
    const prevPosty = parseInt(prevPost.y)
    this.pos.push(prevPostx)
    this.pos.push(prevPosty)
    this.webService.emit('send-coordinates',this.pos)
}
private drawOnCanvas(prevPos:any, currentPos:any){
  if(!this.cx){
    return;
  }
  this.cx.beginPath();
  if(prevPos){
    this.cx.moveTo(prevPos.x,prevPos.y);
    this.cx.lineTo(currentPos.x,currentPos.y);
    this.cx.stroke();
  }
}
public clearZone=()=>{
  this.pos= []
  this.webService.emit('delete-coord',this.pos)
  this.points= []
  this.cx.clearRect(0,0, this.width,this.height);
}
}
