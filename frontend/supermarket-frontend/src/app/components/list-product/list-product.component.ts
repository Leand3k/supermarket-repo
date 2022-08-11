import { Component, OnInit } from '@angular/core';
import { RESTService } from 'src/app/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  
  products: any;

  constructor(private restService: RESTService, private router: Router) {}

  ngOnInit() {
    this.restService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

  deleteProduct(id: number) {
    this.restService.deleteProduct(id).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }

  addProduct() {
    this.router.navigate(['create']);
  }

  editProduct(id: number) {
    this.router.navigate(['edit', id]);
    console.log(id);
  }
}
