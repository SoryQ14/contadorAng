import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { CounterModule } from './Counter/counter.module';
import { CounterComponent } from './Counter/counter.component';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contador : number = 0
  
}
