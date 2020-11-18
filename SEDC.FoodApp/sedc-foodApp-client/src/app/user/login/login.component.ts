import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../user.component.css', './login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false
  message: string = ""

  constructor(private userService: UserService,
                      private router: Router) { }

  ngOnInit(): void {}

  formModel = new FormGroup({
    UserName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  })

  onSubmit() {
    let body = {
      Username: this.formModel.value.UserName,
      Password: this.formModel.value.Password
    }

    this.isLoading = true

    this.userService.login(body).subscribe({
      next: res => {
        localStorage.setItem("token", res.token)

      },
      error: err => {
        this.message = err.error
        this.formModel.reset()
        this.isLoading = false
      },
      complete: () => {
        //create empty order

        this.isLoading = false
        this.router.navigateByUrl("/restaurants")
      }
    })
  }

}
