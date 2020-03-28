import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string = ''): Vendor[] {
    if(searchCriteria === '') return vendors;
    let criteria = searchCriteria.toLowerCase();
    let selVendors: Vendor[]=[];
    for(let vendor of vendors){
      if(vendor.code.toLowerCase().includes(criteria)){
        selVendors.push(vendor);
        continue;
      }
      if(vendor.name.toLowerCase().includes(criteria)){
        selVendors.push(vendor);
        continue;
      }
      if(vendor.address.toLowerCase().includes(criteria)){
        selVendors.push(vendor);
        continue;
      }
      if(vendor.city.toLowerCase().includes(criteria)){
        selVendors.push(vendor);
        continue;
      }
      if(vendor.state.toLowerCase().includes(criteria)){
        selVendors.push(vendor);
        continue;
      }
      if(vendor.zip.toLowerCase().includes(criteria)){
        selVendors.push(vendor);
        continue;
      }
      if(vendor.phone != null && vendor.phone.toLowerCase().includes(criteria)){
        selVendors.push(vendor);
        continue;
      }
      if(vendor.email != null && vendor.email.toLowerCase().includes(criteria)){
        selVendors.push(vendor);
        continue;
      }
    }
    return selVendors;
  }

}
