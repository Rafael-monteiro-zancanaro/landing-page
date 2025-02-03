import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, CarrouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
