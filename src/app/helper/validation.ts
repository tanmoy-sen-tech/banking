import { Injectable } from '@angular/core';
import { Service } from '../service/service';
@Injectable()
export class DateValidate {
    constructor(private api: Service) { }

    /* check whether it's valid date or not */
    public checkFutureDate(fromDate, toDate) {
        const selected = new Date(fromDate).setHours(0, 0, 0, 0);
        const current = new Date(toDate).setHours(0, 0, 0, 0);
        if (selected > current) {
            return true;
        }
    }
}
