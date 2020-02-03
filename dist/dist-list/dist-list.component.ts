import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dist-list',
  templateUrl: './dist-list.component.html',
  styleUrls: ['./dist-list.component.css']
})
export class DistListComponent implements OnInit {
@Input() disteee;
  constructor() { }

  ngOnInit() {
  }

}
