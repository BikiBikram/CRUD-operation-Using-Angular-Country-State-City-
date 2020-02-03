import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {SelectService} from '../country.service';
// import { Country }  from '../shared/data.model';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})

export class CountryListComponent implements OnInit {

  @Input() countreee;
  SearchBar:string;

  @Output() myoutput:EventEmitter<any>=new EventEmitter<any>();


  constructor(private selectService: SelectService) { }

  ngOnInit() {
  }

onEditCountry(CNAME)
{
  console.log(this.myoutput.emit(CNAME));



    // this.myoutput.emit(this.userenterForm);
    // this.userenterForm.get('selectedPizza').setValue(index);
}
onDeleteCountry(CID:number)
{
   const i =this.countreee.findIndex(e=>e.CID===CID);
   if(i ! == -1)
   {
     this.countreee.splice(i,1)
   }

}


}
