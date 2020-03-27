import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor: Vendor = new Vendor();

  delete():void{
    //delete user
    this.vendorsvc.remove(this.vendor).subscribe(
      res=>{
        console.debug("Vendor deleted", res);
        this.router.navigateByUrl("vendors/list");
      },
      err=>{
        console.error("Delete vendor failed", err);
      }
    );
  }
  constructor(
    private route:ActivatedRoute,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res => {
        this.vendor=res;
        console.debug("Vendor detail:", res);
      },
      err =>{
        console.error("Error Vendor.get()", err);
      }

    )
  }

}
