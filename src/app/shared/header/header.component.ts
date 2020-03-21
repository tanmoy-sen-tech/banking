import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/service/notification-service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscrptionroute: Subscription;
  toggleFlag = false;
  routerpath = '/';
  constructor(
    private router: Router,
    private notificationService: NotificationService) {
      this.routerpath = router.url;
    }

  /* toggle function while mobile view */
  public toggle(): void {
    this.toggleFlag = !this.toggleFlag;
  }

  /* logout */
  public logout(): void {
    sessionStorage.clear();
    this.notificationService.clearMessages();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.getRoutepath();
  }

  ngOnDestroy() {
   /* unsubscribe to ensure no memory leaks */
    this.subscrptionroute.unsubscribe();
  }
  public getRoutepath() {
    this.subscrptionroute = this.notificationService.getRoute().subscribe(route => {
      this.routerpath = route;
      if (route) {
        this.routerpath = route;
      } else {
        this.routerpath = null;
      }
      console.log(this.routerpath);
  });


}
}
