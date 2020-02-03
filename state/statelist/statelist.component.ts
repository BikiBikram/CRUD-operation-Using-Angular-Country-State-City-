import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-statelist',
  templateUrl: './statelist.component.html',
  styleUrls: ['./statelist.component.css']
})
export class StatelistComponent implements OnInit {
  @Input() stateeee;
  constructor() { }

  ngOnInit() {
  }

}
