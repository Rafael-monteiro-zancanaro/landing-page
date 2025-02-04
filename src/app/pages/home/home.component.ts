import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CarrouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly START_YEAR: number = 2020;


  calcularTempoServico(): number {
    return new Date().getFullYear() - this.START_YEAR; 
  }
}