import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./module/user/user.module`).then(m => m.UserModule)
  },
  {
    path: 'user',
    loadChildren: () => import(`./module/user/user.module`).then(m => m.UserModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
