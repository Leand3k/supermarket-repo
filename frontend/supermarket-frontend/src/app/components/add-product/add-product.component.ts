import { Component, NgZone, OnInit } from '@angular/core';
import { RESTService } from 'src/app/rest.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  products: Product[] = [];

  constructor(
    public rest: RESTService,
    private router: Router){}

  ngOnInit(): void {}

  add(): void{
    this.router.navigate(['/product-add'])
  }


  

}
