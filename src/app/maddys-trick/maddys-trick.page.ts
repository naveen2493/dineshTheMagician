import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-maddys-trick',
  templateUrl: './maddys-trick.page.html',
  styleUrls: ['./maddys-trick.page.scss'],
})
export class MaddysTrickPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  selectedCard(card) {
    let resultCard = card;
    let navigationExtras: NavigationExtras = {
      state: {
        resultCard: resultCard
      }
    };
    this.router.navigate(['maddys-trick/first-selection'], navigationExtras);

  }

}
