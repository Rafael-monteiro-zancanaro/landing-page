import { Component, OnInit, signal, computed } from '@angular/core';
import { Language } from '../../pages/about/language';
import languagesJSON from '../../assets/languages.json';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  languages = signal<Language[]>([]);

  currentPosition = signal(0);

  carouselTransform = computed(() => `translateX(${-this.currentPosition() * 360}px)`);

  ngOnInit(): void {
    this.languages.set(this.extractLanguagesFromJSONSource());
  }

  extractLanguagesFromJSONSource(): Language[] {
    return languagesJSON.map(l => l as Language);
  }

  next() {
    if (this.currentPosition() < this.languages().length - 3) {
      this.currentPosition.update(pos => pos + 1);
    }
  }

  prev() {
    if (this.currentPosition() > 0) {
      this.currentPosition.update(pos => pos - 1);
    }
  }
}