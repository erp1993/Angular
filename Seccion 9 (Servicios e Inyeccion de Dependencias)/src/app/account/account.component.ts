import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  private loggingService: LoggingService;
  private accountsService: AccountsService;

  constructor (loggingService: LoggingService, accountsService: AccountsService){
    this.loggingService = loggingService;
    this.accountsService = accountsService;
  }

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    // this.loggingService.logStatusChange(status);
  }
}
