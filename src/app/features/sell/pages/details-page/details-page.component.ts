import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router'


@Component({
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  product?: Product;

  constructor(
    private activedRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router) { }


  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['productId']);
      this.product = this.productService.getById(id);
    } )
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
