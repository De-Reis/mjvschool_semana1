import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/sell/models/product.model';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Product> = [
    {
      id: 1,
      descricao: "Bravecto Cães",
      preco: 150,
      quantidade: 3,
      imagem: "https://m.media-amazon.com/images/I/71qzRL5Jm9L._AC_SL1500_.jpg",
      disponivel: true,
    },

    {
      id: 2,
      descricao: "Tapete Higiênico",
      preco: 40,
      quantidade: 1,
      imagem: "https://m.media-amazon.com/images/I/51gd3ZWhHUL._AC_SL1000_.jpg",
      disponivel: true,
    },

    {
      id: 3,
      descricao: "Ração Gatos",
      preco: 130,
      quantidade: 0,
      imagem: "https://m.media-amazon.com/images/I/61HV7y7W8tL._AC_SL1500_.jpg",
      disponivel: false,
    },

    {
      id: 4,
      descricao: "Biscoito Pedigre",
      preco: 31,
      quantidade: 1,
      imagem: "https://m.media-amazon.com/images/I/81qOI7KD2FL._AC_SL1500_.jpg",
      disponivel: true,
    },

    {
      id: 5,
      descricao: "Ração Cães",
      preco: 130,
      quantidade: 5,
      imagem: "https://m.media-amazon.com/images/I/61krIHXdNGS._AC_SL1000_.jpg",
      disponivel: true,
    },

  ]

  constructor() { }

  getProducts() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((product) => product.id === id);
  }

}
