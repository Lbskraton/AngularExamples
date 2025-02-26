import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejemplo17-b',
  imports: [],
  templateUrl: './ejemplo17-b.component.html',
  styleUrl: './ejemplo17-b.component.css'
})
export class Ejemplo17BComponent implements OnInit{

  id=''
  
    activeRoute=Inject(ActivatedRoute)
    ngOnInit(): void {
      this.id=this.activeRoute.snapshot.params['id']
    }
  

}
