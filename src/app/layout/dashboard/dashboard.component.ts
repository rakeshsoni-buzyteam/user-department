import { Component, OnInit } from '@angular/core';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData: any = {};

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.getData(ApiUrl.access_token_login).subscribe(res => {
      this.userData = res.data;
    }, error => {});
  }

}
