import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeComponent } from './payee.component';
import { Service } from 'src/app/service/service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimeModule } from 'src/app/shared/primeng-module';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification-service';
import { UrlConfig } from 'src/app/service/url-config';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PayeeComponent', () => {
  let component: PayeeComponent;
  let fixture: ComponentFixture<PayeeComponent>;
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
      declarations: [ PayeeComponent ],
      imports: [SharedModuleModule, HttpClientTestingModule, PrimeModule, BrowserAnimationsModule ],
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
    fixture = TestBed.createComponent(PayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check values are not undefined', () => {
  const payeeName = 'tanmoy';
  const payeeAcNo = 123;
  const payeeIfsc = 456;
  component.addPayee();
  expect(payeeName).toBeDefined();
  expect(payeeAcNo).toBeDefined();
  expect(payeeIfsc).toBeDefined();
  expect(payeeName.length).toBeGreaterThan(0);
  expect(payeeAcNo).toBeGreaterThan(0);
  expect(payeeIfsc).toBeGreaterThan(0);
   });
});
