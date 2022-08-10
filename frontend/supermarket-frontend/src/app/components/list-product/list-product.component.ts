
import { Component, NgZone, OnInit } from '@angular/core';
import { RESTService } from 'src/app/rest.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: any;
  
  
  

  
  
  constructor(private restService: RESTService, private router: Router,){}

  ngOnInit(){
    this.restService.getProducts().subscribe(data =>{
      console.log(data);
      this.products = data;
      
    })
  }

  // loadProducts(){
  //   return this.restService.getProducts().subscribe((data: {})=>{
  //     this.product = data
  //     console.log(data)
  //   })
  // }

  // productDetails(prod_id: number){
  //   this.router.navigate(['products', prod_id]);
  //   console.log(prod_id);
  // }
}
