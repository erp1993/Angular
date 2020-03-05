import { Injectable, Output, OnChanges, SimpleChanges } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService{  
  @Output() counter = 0;

  constructor(){
    
  };

}
