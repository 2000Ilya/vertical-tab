import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  template: `
    <button class='{{ "tab-button " + tab_number }}' [class.blue]="tab_is_clicked">{{ tab_button_name }}</button>
  `,
  styleUrls: ['./tab-button.component.css']
})

export class TabButtonComponent {
  @Input() tab_button_name: string;
  @Input() tab_number: number;
  @Input() tab_is_clicked: boolean;
}
