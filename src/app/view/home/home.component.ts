import { ButtonComponent } from '@/app/components/button/button.component';
import { DOCUMENTS_HOME } from '@/app/constants/home';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = '{ dev : F.L.C }';
  home_documents = DOCUMENTS_HOME;
  onClickReft(url: string) {
    console.log(
      '%curl==>',
      'color:#ff6188;font-size:1rem;font-weight:bold;',
      url
    );
    window.open(url);
  }
}
