import { Component, Input, ViewChild } from '@angular/core';

import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-sidenav',
  imports: [
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,

    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  @Input() opened = true;
  @ViewChild('drawer') sidenav?: MatSidenav;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.sidenav) {
          this.sidenav.close();
        }
      });
  }
  handleSidenav() {
    this.opened = !this.opened;
  }

  onLogout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
