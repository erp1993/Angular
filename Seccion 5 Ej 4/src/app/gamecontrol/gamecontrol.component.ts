import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css'],
  
})
export class GamecontrolComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  intervalRef;
  counter: number = 1;

  constructor() { }

  ngOnInit(): void {

  }

  onStartGame(): void {
    this.intervalRef = setInterval(() => {
      this.intervalFired.emit(this.counter);
      this.counter++;
    }, 1000)
  }

  onStopGame(): void {
    clearInterval(this.intervalRef);
  }

}
