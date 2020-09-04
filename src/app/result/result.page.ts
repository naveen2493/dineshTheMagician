import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js'


@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  card: any;
  path;
  count: number = 0;


  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.card = this.router.getCurrentNavigation().extras.state.card;
      }

    });
  }

  ngOnInit() {
    this.createNewScratchCard();
  }

  createNewScratchCard() {
    this.path = '<img width="100%" height="100%" src="./assets/cards/' + this.card + '.jpg">';
    console.log("Card design", this.card, this.path);
    const scContainer = document.getElementById('js--sc--container')
    var sc = new ScratchCard('#js--sc--container', {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: 360,//scContainer.offsetWidth,
      containerHeight: 640,
      imageForwardSrc: './assets/scratchcard.jpg',
      //imageBackgroundSrc: './assets/images/scratchcard-background.svg',
      htmlBackground: this.path,
      clearZoneRadius: 40,
      // nPoints: 30,
      // pointSize: 4,
      callback: () => {
        console.log('Now the window will reload !')
        setTimeout(()=> {
        this.router.navigate(['/thanks']);
          // this.router.navigate(['/thanks']);
        }, 2000)
      }
    })
    // Init
    sc.init();
  }

  tapEvent() {
    this.count++;
    setTimeout(() => {
      if (this.count == 1) {
        this.count = 0;
      } if (this.count > 1) {
        this.count = 0;
        this.router.navigate(['/home']);
      }
    }, 250);
  }
}
