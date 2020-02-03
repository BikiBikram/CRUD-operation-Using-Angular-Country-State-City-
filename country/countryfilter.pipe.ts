
import { Pipe, PipeTransform } from '@angular/core';
import { Country }  from '../shared/data.model';




@Pipe({
  name: 'countryfilter'
})

export class countryfilterPipe implements PipeTransform {

transform( countries:Country[],SearchBar:string):Country[]
{

if(!countries || !SearchBar)
{
  return countries;

}
return countries.filter(countr=>
  countr.CNAME.toLowerCase().indexOf(SearchBar.toLowerCase())!==-1);

}

}
