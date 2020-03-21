import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlConfig } from 'src/app/service/url-config';
import { Service } from 'src/app/service/service';
import { NotificationService } from 'src/app/service/notification-service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
statements: [];
gridColumns = [];
  pagination = true;
  sorting = true;
  pageLinks = 5;
  routerpath: string;
  constructor(private routerString: Router, private url: UrlConfig, public api: Service,
              private notificationService: NotificationService) {
              this.routerpath = routerString.url;
  }
  private generateGridColumn(): void {
    this.gridColumns = [
      {
        colName: 'Transaction ID',
        rowName: 'transactionId',
      }, {
        colName: 'Transaction Type',
        rowName: 'transactionType',
      }, {
        colName: 'Date',
        rowName: 'dateTime',
      }, {
        colName: 'Transaction Amount',
        rowName: 'amount',
      },
      {
        colName: 'Description',
        rowName: 'description',
      }
    ];

  }
  ngOnInit() {
    this.getHistory();
    this.notificationService.sendRoute( this.routerpath );
  }
getHistory() {
  this.generateGridColumn();
  this.api.getList(this.url.urlConfig().history).subscribe(data => {
    this.statements = data;
    });
  }
}

