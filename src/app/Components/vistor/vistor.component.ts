import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/services/Auth/forms.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vistor',
  templateUrl: './vistor.component.html',
  styleUrls: ['./vistor.component.css'],
})
export class VistorComponent implements OnInit {
  constructor(private logService: FormsService, private router: Router) {}

  ngOnInit(): void {}
  data: any;
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
        this.router.navigate(['moderator']);
      },
      // (e) => console.log(JSON.stringify(e))
    );
  }
  RegisterformVistor = new FormGroup({
    Fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Address: new FormControl('', Validators.required),
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
  OnSubmitVistor() {
    this.logService
      .postModeratorData(this.RegisterformVistor.value)
      .subscribe((result) => {
        this.data = result;
        localStorage.setItem('token', this.data.token);
        localStorage.setItem('email', this.data.email);
        localStorage.setItem('email', this.data.Fname);

        alert('your data Saved Successfuly');
        this.router.navigate(['moderator']);
      });
  }

}
