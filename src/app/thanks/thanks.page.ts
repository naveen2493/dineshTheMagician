import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.page.html',
  styleUrls: ['./thanks.page.scss'],
})
export class ThanksPage implements OnInit {

  count: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000);
  }

  tapEvent() {
    console.log("Work")
    this.count++;
    setTimeout(() => {
      console.log("Work1")

      if (this.count == 1) {
        this.count = 0;
      } if (this.count > 1) {
        console.log("Work2")

        this.count = 0;
        this.router.navigate(['/home']);
      }
    }, 250);
  }

}

