import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToFlowersPage(rank) {
    let navigationExtras: NavigationExtras = {
      state: {
        rank: rank
      }
    };
    this.router.navigate(['/flowers'], navigationExtras);
  }

}
