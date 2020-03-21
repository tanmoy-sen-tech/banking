import { Injectable } from '@angular/core';
@Injectable()
export class UrlConfig {
    serverConfig = true;
    private apiHost = 'http://10.117.189.111:9090/';
    private apiMock = 'http://localhost:3000/';
    url = {};

    /* url config with url Mock list */
    urlMock() {
        return this.url = {
            userLogin: this.apiMock + 'userLogin',
            mockLogin: this.apiMock + 'mockLogin',
            mockAccountData: this.apiMock + 'mockAccountData',
            listBeneficiary: this.apiMock + 'listBeneficiary',
            history: this.apiMock + 'history'
        };
    }
    /* url config with url Server list */
    urlApi() {
        return this.url = {
            // userLogin: this.apiHost + 'users',
            // userList: this.apiHost + 'users',
            // placeOrder: this.apiHost + 'users',
            // orderSummary: this.apiHost + 'users',
            // preferences: this.apiHost + 'users',
            // allMenu: this.apiHost + 'users'

            userLogin: this.apiMock + 'userLogin',
            mockLogin: this.apiMock + 'mockLogin',
            mockAccountData: this.apiMock + 'mockAccountData',
            listBeneficiary: this.apiMock + 'listBeneficiary',
            history: this.apiMock + 'history'
        };
    }

     /* return url */
    urlConfig() {
        return  this.serverConfig ? this.urlApi() : this.urlMock() ;
    }
}
