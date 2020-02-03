import { Component, OnInit,Input } from '@angular/core';
import { Country }  from '../shared/data.model';
import {SelectService} from './country.service';
// import {NgForm} from '@angular/forms';
import {FormGroup,FormControl} from '@angular/forms';
import {Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {


 countries:Country[];
   dtafromchild:any;
   editMode=false;
   SearchBar:string;




  constructor(private selectService: SelectService,private _router:Router) { }

  ngOnInit() { this.countries = this.selectService.getCountries()}

  userenterForm = new FormGroup({
     CID:new FormControl(''),
     CNAME:new FormControl('')

  });


  Onaddcountry(CID:number,newcontry:Country){

               this.countries.push(this.userenterForm.value);
               this.countries.findIndex(e=>e.CID===CID);
//  const i =this.countries.findIndex(e=>e.CID===CID);
//  console.log(i,1);


    //console.log(this.dtafromchild[index].slice());
        //  this.countries[index]=newcountry;
      //  console.log(this.countries.slice());
      //   console.log(newcountry);




  }

  getdat(daaaaaatta:any)
{


 console.log(this.SearchBar=daaaaaatta);


  //console.log( this.userenterForm);

}

getdata(Eventdata:any)
{

 this.editMode=true;
 console.log(this.dtafromchild=Eventdata);


  //console.log( this.userenterForm);

}
OnUpdatecountry(index:number,newcountry:Country)
{
console.log( this.countries[index]=newcountry);
  //this.countries.slice();

}
onlogout(){
  this._router.navigate(['/login']);

}

}
