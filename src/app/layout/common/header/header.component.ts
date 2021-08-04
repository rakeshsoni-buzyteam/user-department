import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSideBar = true;

  constructor(
    public uiService: UiService, private message: MessageService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.message.confirm('Logout')
      .then(result => {
        if (result.value) {
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      });
  }

}
