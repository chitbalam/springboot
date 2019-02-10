import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Stock } from '../user/Stock.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  stocks: Stock[];
  st: Stock;
  errorMessage: string;
  stockslist:String[];
  selected:string;
  isStockLoaded = false;
  constructor(private userService: UserService) { }

   ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.stocks = data;
      }, error => {
        console.log(error.status);
        console.log(error.message);
        if (error.status === 401)
           this.errorMessage ="Unauthorized";
        else  
           this.errorMessage ="Unknown Error";
      
      });
   }
   selectName(){
    alert(this.selected);
    

   }
   onSubmit() {
    alert(this.selected);
    // this.userService.getStockQuote(this.selected).subscribe(
    //   data => {
    //     this.st =data;
    //   }, error => {
    //     console.log(error.status);
    //     console.log(error.message);
    //     if (error.status === 401)
    //        this.errorMessage ="Unauthorized";
    //     else  
    //        this.errorMessage ="Unknown Error";
      
    //   });
 
  }

 }
