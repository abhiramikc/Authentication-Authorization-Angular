import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  invalidLogin: boolean = false;
  login(form:NgForm)
  {
    console.log('login',form);
    const credential=JSON.stringify(form.value);
    console.log('credential',credential);
    this.http.post("https://localhost:44308/api/auth/login",credential,{headers:new HttpHeaders({
      "Content-Type": "application/json",
    })
  }).subscribe(response=>{
    const token = (<any>response).token;
    localStorage.setItem("jwt",token);
    this.invalidLogin=false;
    this.router.navigate(['/Dashboard']);
  },
  err=>{
    this.invalidLogin=true;
  });

  }

  logout()
  {
localStorage.removeItem("jwt")
  }

}
