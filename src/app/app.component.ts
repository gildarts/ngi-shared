import { Component, OnInit } from '@angular/core';
import { GadgetService } from 'projects/web-gadget/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'onecampus-ng-shared';

  accessPoint?: string;
  schoolInfo: any;

  constructor(
    private gadget: GadgetService
  ) { }

  async ngOnInit() {
    const contract = await this.gadget.getContract('basic.public');

    this.accessPoint = contract.getAccessPoint;

    // 呼叫 service。
    this.schoolInfo = await contract.send('beta.GetSystemConfig', {
      Name: '學校資訊'
    });
  }
}
