import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-second-selection',
  templateUrl: './second-selection.page.html',
  styleUrls: ['./second-selection.page.scss'],
})
export class SecondSelectionPage implements OnInit {

  resultCard;
  selectedCards = [];
  cardsToShow = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.resultCard = this.router.getCurrentNavigation().extras.state.resultCard;
        this.cardsToShow = this.router.getCurrentNavigation().extras.state.selectedCards;
        console.log("Result", this.resultCard, this.cardsToShow);
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
      document.getElementById('2' + card).style.transform = 'rotateY(0)';
    }
    else {
      if (this.selectedCards.length <= 1) {
        this.selectedCards.push(card);
        console.log("Cards", this.selectedCards, this.selectedCards.length);
        document.getElementById('2' + card).style.transform = 'rotateY(180deg)';
      }
    }
  }

  goToThirdSelect() {
    if (this.selectedCards.indexOf(this.resultCard) > -1) {
      let navigationExtras: NavigationExtras = {
        state: {
          resultCard: this.resultCard,
          selectedCards: this.selectedCards
        }
      };
      this.router.navigate(['maddys-trick/third-selection'], navigationExtras);
    }
    else {
      let navigationExtras: NavigationExtras = {
        state: {
          resultCard: this.resultCard,
          selectedCards: this.cardsToShow.filter(el => !this.selectedCards.includes(el))
        }
      };
      this.router.navigate(['maddys-trick/third-selection'], navigationExtras);
    }
  }

}
