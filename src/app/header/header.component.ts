import { Component, computed, signal, Signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuOpen: Signal<boolean> = signal(false);


  toggleMenu() {
    this.isMenuOpen = computed(() => !this.isMenuOpen);
  }
}
