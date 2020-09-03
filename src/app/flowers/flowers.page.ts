import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.page.html',
  styleUrls: ['./flowers.page.scss'],
})
export class FlowersPage implements OnInit {

  rank: any;
 
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.rank = this.router.getCurrentNavigation().extras.state.rank;
      }
    });
  }

  ngOnInit() {
  }

  goToResultPage(flower) {
    let navigationExtras: NavigationExtras = {
      state: {
        card: this.rank+flower
      }
    };
    this.router.navigate(['/result'], navigationExtras);

  }

}
