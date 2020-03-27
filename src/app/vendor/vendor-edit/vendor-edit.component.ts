import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor=new Vendor;

  save():void{
    this.vendorsvc.change(this.vendor).subscribe(
      res=>
      {
        console.debug("Vendor change success", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err=>{
        console.error("error changing user:", err);
      }
    );
  }

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res=>{
        this.vendor= res;
        console.debug("Vendor detail:", res);
      },
      err=>{
        console.error("Error in Vendor detail user:", err);
      }
    );
  }

}
