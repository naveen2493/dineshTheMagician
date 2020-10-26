import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-first-selection',
  templateUrl: './first-selection.page.html',
  styleUrls: ['./first-selection.page.scss'],
})
export class FirstSelectionPage implements OnInit {

  selectedCards = [];
  resultCard;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.resultCard = this.router.getCurrentNavigation().extras.state.resultCard;
        console.log("Result", this.resultCard);
      }
    });
  }

  ngOnInit() {
  }

  selectCard(card) {
    if (this.selectedCards.indexOf(card) > -1) {
      let index = this.selectedCards.indexOf(card);
      this.selectedCards.splice(index, 1);
      console.log("Cards", this.selectedCards);
      document.getElementById(card).style.transform = 'rotateY(0)';
      debugger;
    }
    else {
      if (this.selectedCards.length <= 3) {
        this.selectedCards.push(card);
        console.log("Cards", this.selectedCards, this.selectedCards.length);
        document.getElementById(card).style.transform = 'rotateY(180deg)';
      }
    }
  }

  goToSecondSelect() {
    if (this.selectedCards.indexOf(this.resultCard) > -1) {
      let navigationExtras: NavigationExtras = {
        state: {
          resultCard: this.resultCard,
          selectedCards: this.selectedCards
        }
      };
      console.log("navigate to 1")
      this.router.navigate(['maddys-trick/second-selection'], navigationExtras);
    }
    else {
      let navigationExtras: NavigationExtras = {
        state: {
          resultCard: this.resultCard,
          selectedCards: ['2S','3S','4S','5S','6S','7S','8S','9S'].filter( el => !this.selectedCards.includes(el))
        }
      };
      console.log("navigate to 2")
      this.router.navigate(['maddys-trick/second-selection'], navigationExtras);
    }
  }

}
