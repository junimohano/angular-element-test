import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  @Input() name = 'friend';

  focus: string;
  focusSet = false;

  setFocus(value) {
    this.focus = value;
    this.focusSet = true;
  }
}
