import { Component, OnInit } from '@angular/core';
import { Country }  from '../shared/data.model';
import { State} from '../shared/state.model';
import {Dist} from '../shared/dist.model';

import {SelectService} from '../country/country.service';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-dist',
  templateUrl: './dist.component.html',
  styleUrls: ['./dist.component.css']
})
export class DistComponent implements OnInit {

    selectedCountry: Country = new Country(0,'');

    countryyyyy:Country[];
    stateeee:State[];
    disteee:Dist [];

    constructor(private selectService: SelectService) { }

  ngOnInit() {
     this.countryyyyy= this.selectService.getCountries();
     this.stateeee=this.selectService.getStates();
     this.disteee=this.selectService.getDist() ;
     this.onSelect(this.selectedCountry.CID);
     this.onlist(this.selectedCountry.CNAME);}

   userdistform = new FormGroup({
     CID:new FormControl(''),
    id:new FormControl(''),
    name:new FormControl(''),
    DNAME:new FormControl(''),
    CNAME:new FormControl('')

  });


 onSelect(CID) {
    this.stateeee = this.selectService.getStates().filter((item) => item.CID == CID);
  }

onlist(id){
  this.stateeee=this.selectService.getStates().filter((item) => item.id=id);
}


  onaddstate()
  {
     this.disteee.push(this.userdistform.value);
     console.warn(this.userdistform.value);
  }



}
