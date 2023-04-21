import { Router } from '@angular/router';
import { UsersService } from './../../../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: any = "";
  senha: string = "";
  error = false;

  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  autenticate() {
    const user = this.usersService.getUserByEmailAndSenha(this.email, this.senha);

    if(user) {
      sessionStorage.setItem('user', JSON.stringify(user))
      this.router.navigateByUrl('produtos');
    } else {
      this.error = true;
    }
  }

}
