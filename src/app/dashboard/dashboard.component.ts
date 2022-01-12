import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://localhost:44308/api/Customer/cu",{
      headers:new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      console.log("response from api ",response);
    },
    err => {
      console.log("error from api ",err);
    });
  }

}
