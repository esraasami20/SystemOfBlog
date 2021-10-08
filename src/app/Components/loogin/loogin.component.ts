import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/services/Auth/forms.service';

@Component({
  selector: 'app-loogin',
  templateUrl: './loogin.component.html',
  styleUrls: ['./loogin.component.css'],
})
export class LooginComponent implements OnInit {
  constructor(private logService:FormsService,private router:Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    Email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    ]),
  });
  OnSubmit() {
    this.logService.login(this.loginForm.value).subscribe(
      (a) => {
        localStorage.setItem('token', a.token),
          localStorage.setItem('email', a.email);
          if (
            (<HTMLInputElement>document.getElementById('moderator')).checked
          ) {
            this.router.navigate(['moderator']);
          } else if (
            (<HTMLInputElement>document.getElementById('admin')).checked
          ) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['home']);
          }
         
      },
      (e) => console.log(JSON.stringify(e))
    );
  }
}
