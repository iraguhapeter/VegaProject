import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  
  public incrementCounter() {
    this.currentCount++;
  }
}
