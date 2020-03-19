import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { Service } from '../service/service';
import { AuthGuard } from '../service/auth-guard';
import { UrlConfig } from '../service/url-config';
import { GridComponent } from './grid/grid.component';
import { PrimeModule } from './primeng-module';
import { DateValidate } from '../helper/validation';
import { OnlynumberDirective } from 'src/app/helper/allow-number.directive';
@NgModule({
  declarations: [AlertComponent, SpinnerComponent,OnlynumberDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimeModule
  ],
  providers: [Service, AuthGuard, UrlConfig, DateValidate],
  exports: [ FormsModule,
    ReactiveFormsModule,
    AlertComponent,
    SpinnerComponent,
    PrimeModule ,
    OnlynumberDirective]
})
export class SharedModuleModule { }
