import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RESTService } from 'src/app/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'supermarket-frontend';

  constructor(private router: Router) {}

  productsList() {
    this.router.navigate(['products']);
  }

  createProduct() {
    this.router.navigate(['create']);
  }
}
