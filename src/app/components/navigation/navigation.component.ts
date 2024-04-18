import { MENU_END, MENU_START } from '@/app/constants/navigation';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe
  ]
})
export class NavigationComponent {
  data_start = MENU_START;
  data_end = MENU_END;
  private breakpointObserver = inject(BreakpointObserver);

  // #region breakpoint
  currentBreakpoint$: Observable<string> = this.breakpointObserver
    .observe([
      Breakpoints.Large,
      Breakpoints.XLarge,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ])
    .pipe(
      map((result) => {
        const matchingBreakpoints = Object.keys(result.breakpoints).find(
          (breakpoint) => result.breakpoints[breakpoint]
        );
        const matchingBreakpointKey = Object.keys(Breakpoints).find((key) =>
          (Breakpoints as any)[key].includes(matchingBreakpoints)
        );
        console.log(
          '%cmatchingBreakpointKey==>',
          'color:#ff6188;font-size:1rem;font-weight:bold;',
          matchingBreakpointKey
        );
        return matchingBreakpointKey!;
      }),
      shareReplay()
    );
}
