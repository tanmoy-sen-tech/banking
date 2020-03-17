import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PayeeComponent } from './payee/payee.component';
import { HistoryComponent } from './history/history.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'history',component:HistoryComponent},
  {path:'payee',component:PayeeComponent},
  {path:'fundtransfer',component:FundtransferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
