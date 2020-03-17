import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {CarouselModule} from 'primeng/carousel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {AccordionModule} from 'primeng/accordion';
import {TabViewModule} from 'primeng/tabview';
@NgModule({
  declarations: [],
  imports: [
    TableModule,
    CardModule,
    CalendarModule,
    DropdownModule,
    RadioButtonModule,
    ButtonModule,
    CarouselModule,
    DialogModule,
    ToastModule,
    AccordionModule,
    TabViewModule

  ],
  providers: [],
  exports: [ CardModule, CalendarModule, DropdownModule, TableModule,
    CarouselModule, RadioButtonModule, ButtonModule, DialogModule, ToastModule,AccordionModule,
    TabViewModule ]
})
export class PrimeModule { }
