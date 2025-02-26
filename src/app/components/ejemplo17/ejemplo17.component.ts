import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejemplo17',
  imports: [],
  templateUrl: './ejemplo17.component.html',
  styleUrl: './ejemplo17.component.css'
})
export class Ejemplo17Component implements OnInit{
  
  id=''

  constructor(private activeRoute:ActivatedRoute){
    //this.id=this.activeRoute.snapshot.params['id']
  }
  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id']
  }

  

}
