import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent {
  paragraphVisible = false;
  paragraph = 'This is pargraph number:';
  paragraphs: string[] = [];

  onToggleButton() {
    this.paragraphVisible = !this.paragraphVisible;
    if (this.paragraphVisible) {
      this.paragraphs.unshift(this.paragraph);
    }
  }
}
