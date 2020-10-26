import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Insomnia } from '@ionic-native/insomnia/ngx';


@Component({
  selector: 'app-scratch-card',
  templateUrl: './scratch-card.page.html',
  styleUrls: ['./scratch-card.page.scss'],
})
export class ScratchCardPage {

  card;

  constructor(private router: Router) {

  }

  touchstart(event) {
    console.log("Start", event.srcElement.innerHTML);
    this.card = event.srcElement.innerHTML;
  }

  touchend(event) {
    console.log("Events", event);
    let screenX = event.changedTouches[0].pageX;
    let screenY = event.changedTouches[0].pageY;
    console.log("width", screen.width, "height", screen.height, "screenX", screenX, "x", "screenY", screenY, screenX / screen.width, "y", screenY / screen.height)


    if (screenX / screen.width < 0.5 && screenY / screen.height < 0.5) {
      console.log("S");
      this.card += 'S';
    }
    else if (screenX / screen.width > 0.5 && screenY / screen.height < 0.5) {
      console.log("H");
      this.card += 'H';
    }
    else if (screenX / screen.width < 0.5 && screenY / screen.height > 0.5) {
      console.log("D");
      this.card += 'D';
    }
    else {
      console.log("C");
      this.card += 'C';
    }

    let navigationExtras: NavigationExtras = {
      state: {
        card: this.card
      }
    };
    this.router.navigate(['/result'], navigationExtras);
  }

}

