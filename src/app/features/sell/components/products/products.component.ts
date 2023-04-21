import { Router } from '@angular/router';
import { ProductsService } from './../../../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Produtos";

  exibeProduto = true;

  products: Array<Product> = this.productsService.getProducts();


  constructor(
    private productsService: ProductsService,
    private  router: Router) { }


  ngOnInit(): void {
  }

  detalhesProduto(idProduto: number) {
    this.router.navigateByUrl(`product-details/${idProduto}`);
  }

}
