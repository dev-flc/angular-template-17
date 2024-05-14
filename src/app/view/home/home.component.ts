import { ButtonComponent } from '@/app/components/button/button.component';
import { MENU_END } from '@/app/constants/navigation';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = '{ dev : F.L.C }';
  data_end = MENU_END;

  constructor(private router: Router) {}

  onClickReft(url: string) {
    console.log(
      '%curl==>',
      'color:#ff6188;font-size:1rem;font-weight:bold;',
      url
    );
    this.router.navigate([url]);
  }

  openNewBusiness() {
    this.router.navigate(['/new-business', 'new']);
  }
}
