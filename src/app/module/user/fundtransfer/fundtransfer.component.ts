import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlConfig } from 'src/app/service/url-config';
import { Service } from 'src/app/service/service';
import { MessageService } from 'primeng/api';
import { payee } from 'src/app/model/model';
import { NotificationService } from 'src/app/service/notification-service';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {
  payeelist:payee[];
  selectedPayee:any;
  transferAmount:number;
  routerpath:string;
  constructor(private routerString: Router, private url: UrlConfig, public api: Service,  private messageService: MessageService,
    private notificationService: NotificationService) {
    this.routerpath = routerString.url;
   }

  ngOnInit() {
    this.getPayeeNames();
    this.notificationService.sendRoute( this.routerpath );
  }
  getPayeeNames(){
    this.api.getList(this.url.urlConfig().listBeneficiary).subscribe(data => {
  
    console.log(data);
  this.payeelist = data;
    });
  }
  transfer(){
   if(this.selectedPayee){
    if( this.selectedPayee.accountNumber !== undefined && this.transferAmount> 0){
      const fundtransferObject = {
        fromAccount:1234,
        toAccount:this.selectedPayee.accountNumber,
        amount:Number(this.transferAmount)
      }
      this.messageService.add({ severity: 'success', summary: 'success', detail: 'fund transfered'});


     /* Api call*/

    // this.api.postCall(this.url.urlConfig().transaction, fundtransferObject, 'post').subscribe(data => {
    //   if (data.statusCode === 200) {
    //   this.messageService.add({ severity: 'success', summary: 'success', detail: 'fund transfered '});
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
   else{
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Please provide correct details'});
   }
    
    
  }
}
