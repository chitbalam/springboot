import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../user/Stock.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private stUrl = 'http://localhost:8080/api/test/user/stock';
   errorMessage: string;
  stocks: string [];
  constructor(private http: HttpClient) { }
 
  getUserBoard() {
    console.log("getUserBoard called");
    console.log(this.stocks);
    return this.http.get<Stock[]>(this.userUrl);
  }
  getStockQuote(stockname) {
    console.log("getUserBoard called");
    console.log(this.stocks);
    return this.http.get<Stock>(this.stUrl,stockname);
  }
 
}
