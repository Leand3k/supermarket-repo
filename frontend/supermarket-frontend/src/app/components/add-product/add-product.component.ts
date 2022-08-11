import { Component, OnInit } from '@angular/core';
import { RESTService } from 'src/app/rest.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  products: Product = new Product();
  submitted = false;

  baseurl = 'https://localhost:7017/api';

  constructor(
    public rest: RESTService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  newProduct(): void {
    this.products = new Product();
  }

  onSubmit() {
    this.submitted = true;
    this.saveProduct();
  }

  saveProduct() {
    this.rest.addProduct(this.products).subscribe((data) => {
      console.log(data), (error: any) => console.log(error);
    });
    this.products = new Product();
    this.productsList();
  }

  productsList() {
    this.router.navigate(['products']);
  }
}
