import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maddys-result',
  templateUrl: './maddys-result.page.html',
  styleUrls: ['./maddys-result.page.scss'],
})
export class MaddysResultPage implements OnInit {

  resultCard;
  count: number = 0;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.resultCard = this.router.getCurrentNavigation().extras.state.resultCard;
        console.log("Result3", this.resultCard);
      }
    });
  }

  ngOnInit() {
  }

  tapEvent() {
    this.count++;
    setTimeout(() => {
      if (this.count == 1) {
        this.count = 0;
      }
      if (this.count > 1) {
        this.count = 0;
        this.router.navigate(['/home']);
      }
    }, 250);
  }

}
