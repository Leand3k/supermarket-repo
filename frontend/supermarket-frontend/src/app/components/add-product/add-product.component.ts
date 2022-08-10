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

  products: Product = new Product()
  submitted=false;

  constructor(
    public rest: RESTService,
    private router: Router){}

  ngOnInit() {}

  newProduct(): void{
    this.products = new Product();
  }

  onSubmit(){
    this.submitted=true;
    this.saveProduct();
  }

  saveProduct(){
    this.rest.addProduct(this.products)
      .subscribe(data=>{
        console.log(data),
          (        error: any)=>console.log(error)
      });
      this.products=new Product();
      this.productsList();
  }

  productsList(){
    this.router.navigate(['app-list-product']);
  }

  

}
