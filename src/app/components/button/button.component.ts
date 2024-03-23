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
  @Input() button_name!: string;
  @Input() button_color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() button_name_icon = 'home';
  @Input() button_type = 'mat-button';
}
