import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  //templateUrl: './post.component.html',
  template:
   ` 
   <div>
   <h4>{{title}}</h4>
   <button {click}="toggleDesc()">Toggle</button>
    
  <-- div style="display:none" -->
  <div [style.display]="show ? 'inline' : 'none'">
    This is a description area ...
    This is a description area ...
    This is a description area ...
    This is a description area ...
    This is a description area ...
    </div>
   </div>
   `,
  styleUrls: ['./post.component.css']
})

export class PostComponent{

  title:string = 'This is a sample post component'
  show:boolean = true
  toggleDesc(){
    this.show = !this.show
  }
  
}
