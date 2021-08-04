import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  role = '';
  
  constructor(
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.role = this.uiService.getRole();
  }

}
