import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundtransferComponent } from './fundtransfer.component';
import { Service } from 'src/app/service/service';
import { of } from 'rxjs';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimeModule } from 'src/app/shared/primeng-module';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification-service';
import { MessageService } from 'primeng/api';
import { UrlConfig } from 'src/app/service/url-config';

describe('FundtransferComponent', () => {
  let component: FundtransferComponent;
  let fixture: ComponentFixture<FundtransferComponent>;
  let api: Service;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  const MockUserService = {
    getList(url: string) {
      // tslint:disable-next-line: no-unused-expression
      return of(
        [
          {
            beneficiaryName:  'Sachin tendulkar',
            accountNumber: 789456,
            ifscCode: 978,
            customerId: 123
          }
        ]
      );
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundtransferComponent ],
      imports: [SharedModuleModule, HttpClientTestingModule, PrimeModule ],
       providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Service, useValue: MockUserService }, NotificationService, MessageService,
        UrlConfig]
    })
    .compileComponents();
    mockRouter = TestBed.get(Router);
    api = TestBed.get(Service);



  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FundtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check values are not undefined', () => {
    component.ngOnInit();
    const selectedPayee = {
      beneficiaryName:  'Sachin tendulkar',
      accountNumber: 789456,
      ifscCode: 978,
      customerId: 123
    };
    const transferAmount = 2000;
    expect(component.transferAmount).toBe(0);
    component.transfer();
    expect(component.selectedPayee.accountNumber).toBeDefined();
    expect(transferAmount).toBeGreaterThan(0);
       });
});
