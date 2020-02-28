import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = [];
  private accountsService : AccountsService;

  constructor(accountsService: AccountsService){
    this.accountsService = accountsService;
  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

}
