import { Country }  from '../shared/data.model';
import { Injectable } from '@angular/core';
import {State} from '../shared/state.model';
import {Dist} from '../shared/dist.model';


export class SelectService {

// public getCountries:Country[]=[
// {
//   CID:1,
//   CNAME:"India"

// },
// {
//   CID:2,
//   CNAME:"Srilanka"

// }
// ]


getCountries() {
    return [
     new Country(1, 'India' ),
     new Country(2, 'Srilanka'),
     new Country(3, 'Japan'),
    ];
  }

  getStates() {
   return [
     new State(1, 1,'India', 'odisha' ),
     new State(2, 1,'India', 'UP' ),
     new State(3, 1,'India', 'Karnataka'),
     new State(4, 1,'India', 'Telengana'),
     new State(5, 2,'Srilanka', 'sri1' ),
     new State(6, 2,'Srilanka', 'sri2'),
     new State(7, 2,'Srilanka', 'sri3')
    ];
  }

getDist() {
     return [
     new Dist(1, 1, 'Bhadrak','odisha','India' ),
     new Dist(2, 1, 'Ayodhya','UP','India' ),
     new Dist(3, 1, 'Kar','Karnataka','India'),
     new Dist(4, 1, 'Hawaii','Telengana','India'),
     new Dist(5, 2, 'Sao ','sri1', 'Srilanka' ),
     new Dist(6, 2, 'Rio ','sri1', 'Srilanka'),
     new Dist(7, 2, 'Minas' ,'sri3', 'Srilanka')
    ];

//     DeleteCountry(CID:number)
//     {
// this.Country.FindIndex(e=>e.id==e.id)
//     }
  }



}
