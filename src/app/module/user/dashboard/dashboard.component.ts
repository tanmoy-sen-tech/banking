import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlConfig } from 'src/app/service/url-config';
import { Service } from 'src/app/service/service';
import { MessageService } from 'primeng/api';
import { NotificationService } from 'src/app/service/notification-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userDetail:any;
userAccountDetails:any;
spinner = false;
routerpath:string;
  constructor(private routerString: Router, private url: UrlConfig, public api: Service,  private messageService: MessageService,
    private notificationService: NotificationService) { 
    this.routerpath = routerString.url;
  }

  ngOnInit() {
    this.getUserAccountDetails();
  }
  getUserAccountDetails(){
    this.spinner =true;
    this.userDetail = JSON.parse(sessionStorage.getItem('currentUser'));
    this.api.getList(this.url.urlConfig().mockAccountData).subscribe(data => {
      this.userAccountDetails = data;
      this.spinner =false;
      this.notificationService.sendRoute( this.routerpath );
      
  });
}
}
