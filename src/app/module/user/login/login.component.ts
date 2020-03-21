import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { Router } from '@angular/router';
import { ConstantService } from 'src/app/service/constant';
import { CommonService } from 'src/app/service/common-service';
import { NotificationService } from 'src/app/service/notification-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  spinner = false;
  userData: any;
  routerPath: string;
  constructor(
    private fb: FormBuilder,
    private api: Service,
    private url: UrlConfig,
    private router: Router,
    private userConstant: ConstantService,
    public common: CommonService,
    private notificationService: NotificationService
  ) {
    this.routerPath = router.url;
  }
/*  Login form controls creation */
private createForm() {
  this.loginForm = this.fb.group({
    userId: ['', Validators.required],
    password: ['', Validators.required]
  });
}

/*  Access to login form fields */
get login() { return this.loginForm.controls; }


/* Go to the page basedon type
 @param mobile is user input
 @param password is user input
*/
public onClickSubmit() {
  this.submitted = true;
  if (this.loginForm.valid) {
    const postObject = {
      userId: Number(this.loginForm.value.userId),
      password: this.loginForm.value.password
    };
    /*Mock*/
    this.api.getList(this.url.urlConfig().mockLogin).subscribe(data => {
        console.log(data);
        this.userData = data;
        if (this.userData) {
          const userDetails = {
          userName: this.userData.userName,
          userId: this.userData.userId
        };
          sessionStorage.setItem('currentUser', JSON.stringify(userDetails));
          this.router.navigate(['/user/dashboard']);
        }
      });
  }
}

/* Modal Action
@param Ok modal has been closed
*/
public modalAction(action: string): void {
  if (action === 'Ok') {
    this.spinner = false;
    this.common.alertConfigDefaultValue();
  }
}

/* Oninit call */
ngOnInit() {
  /* Check whether login/not */
  this.notificationService.sendRoute( this.routerPath );
  if (!this.common.validUser()) {
    this.router.navigate(['/']);
  }
  this.spinner = true;
  /* Call the form creation while on component initiation */
  this.createForm();
  this.spinner = false;
}

}


