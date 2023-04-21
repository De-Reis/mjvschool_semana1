import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      nome: "Denise",
      email: "denise@gmail.com",
      senha: "12345",
    },
    {
      id: 2,
      nome: "Flóki" ,
      email: "floki@gmail.com",
      senha: "123456",
    }

  ]

  constructor() { }

  getUsers(){
    return this.users
  }

  getUserByEmailAndSenha(email: string, senha: string){
    return this.users.find((user) => user.email === email && user.senha === senha)
  }
}
