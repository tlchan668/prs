import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  save(): void{
    this.vendorsvc.create(this.vendor).subscribe(
      res=>{
        console.debug("Vendor created:", res);
        this.router.navigateByUrl("vendors/list")
      },
      err=>{
        console.error("Vendor Create Error:", err);
      }
    );
  }
  constructor(
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
