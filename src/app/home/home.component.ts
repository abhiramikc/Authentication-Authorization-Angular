import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
  }
  isUserAuthenticated(){
    const token = localStorage.getItem('jwt');
    if(token && !this.jwtHelper.isTokenExpired(token))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  public logOut=() =>{
    localStorage.removeItem("jwt");
  }

}
