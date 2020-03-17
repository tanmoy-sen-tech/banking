import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlConfig } from 'src/app/service/url-config';
import { payee } from 'src/app/model/model';
import { Service } from 'src/app/service/service';
import { MessageService } from 'primeng/api';
import { NotificationService } from 'src/app/service/notification-service';
@Component({
  selector: 'app-payee',
  templateUrl: './payee.component.html',
  styleUrls: ['./payee.component.css']
})
export class PayeeComponent implements OnInit {
payeelist:payee[];
payeeName:string;
payeeAcNo:number;
payeeIfsc:number;
routerPath:string;
  constructor(private routerString: Router, private url: UrlConfig, public api: Service,  private messageService: MessageService,
    private notificationService: NotificationService) { 
    this.routerPath = routerString.url;
  }

  ngOnInit() {
    this.getPayee();
       this.notificationService.sendRoute( this.routerPath );
  }
getPayee(){
  this.api.getList(this.url.urlConfig().listBeneficiary).subscribe(data => {

  console.log(data);
this.payeelist = data;
  });
}
addPayee(){
  if( this.payeeName !== undefined && this.payeeAcNo !== undefined && this.payeeIfsc !== undefined && this.payeeName.length > 0 && this.payeeAcNo > 0 && this.payeeIfsc > 0){
const postObject = {
  beneficiaryName:this.payeeName,
  accountNumber:this.payeeAcNo,
  ifscCode:this.payeeIfsc,
  // customerId:sessionStorage.getItem('currentUser')
  customerId:12378
};
this.payeelist.push(postObject);
this.messageService.add({ severity: 'success', summary: 'success', detail: 'payee Added'});
 /* Api call*/

    // this.api.postCall(this.url.urlConfig().beneficiary, postObject, 'post').subscribe(data => {
    //   if (data.statusCode === 200) {
    //   
    //  
    //   } else {
    //     this.common.alertConfig = this.common.modalConfig(
    //       'Error', this.userConstant.messageConstant()[data.statusCode],
    //       true, [{ name: 'Ok' }]
    //       );
    //     
    //   }
    // });
  }
  else{
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please provide correct details'});
  }
}
}
