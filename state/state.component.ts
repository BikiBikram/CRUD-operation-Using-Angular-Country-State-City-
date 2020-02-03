import { Component, OnInit } from '@angular/core';
import { Country }  from '../shared/data.model';
import { State} from "../shared/state.model";
import {SelectService} from '../country/country.service';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  countryyyyy:Country[];
  stateeee:State[];


  constructor(private selectService: SelectService) { }

  ngOnInit(){
     this.countryyyyy= this.selectService.getCountries();
     this.stateeee=this.selectService.getStates();}


      userstateform = new FormGroup({
     id:new FormControl(''),
    name:new FormControl(''),

    CNAME:new FormControl('')

  });
  onaddstate()
  {
        this.stateeee.push(this.userstateform.value);

    //this.stateeee = this.selectService.getStates().filter((item) => item.CID == CID);

   // this.stateeee.push(this.userstateform.value);
    console.log(this.userstateform.value);

  }



}
