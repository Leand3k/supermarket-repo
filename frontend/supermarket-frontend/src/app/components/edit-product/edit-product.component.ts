import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from 'src/app/product';
import { RESTService } from 'src/app/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  id!: number;
  product!: Product;
  submitted = false;

  constructor(
    private restService: RESTService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.product = new Product();
    this.id = this.route.snapshot.params['id'];
    this.restService.getProduct(this.id).subscribe(
      (data) => {
        this.product = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.editProduct();
  }

  editProduct() {
    this.restService.updateProduct(this.id, this.product).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.product = new Product();
    this.productsList();
  }

  productsList() {
    this.router.navigate(['products']);
  }

  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
