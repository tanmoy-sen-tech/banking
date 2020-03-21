import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryComponent } from './history.component';
import { GridComponent } from 'src/app/shared/grid/grid.component';
import { Service } from 'src/app/service/service';
import { of } from 'rxjs';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimeModule } from 'src/app/shared/primeng-module';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification-service';
import { MessageService } from 'primeng/api';
import { UrlConfig } from 'src/app/service/url-config';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
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
            description: 'done',
            transactionId: 100001,
            transactionType: 'Debit',
            dateTime: '27-01-2020',
            amount: 5000
          },
        ]
      );
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryComponent, GridComponent ],
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
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
