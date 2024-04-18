import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() btn_name!: string;
  @Input() btn_color!: 'primary' | 'accent' | 'warn';
  @Input() btn_name_icon!: string;
  @Input() btn_class_color_text!:
    | 'btn-color-white'
    | 'btn-color-primary'
    | 'btn-colot-accent'
    | 'btn-color-warning';
}
