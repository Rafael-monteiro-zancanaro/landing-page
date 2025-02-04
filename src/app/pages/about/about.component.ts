import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly START_YEAR: number = 2020;


  calcularTempoServico(): number {
    return new Date().getFullYear() - this.START_YEAR; 
  }
}
