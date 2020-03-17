import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { PayeeComponent } from './payee/payee.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [LoginComponent, DashboardComponent, FundtransferComponent, PayeeComponent, HistoryComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModuleModule
  ]
})
export class UserModule { }
