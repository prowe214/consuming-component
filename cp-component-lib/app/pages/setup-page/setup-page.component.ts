import { RandomService } from './../../core/utility/random.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpl-setup-page',
  styleUrls: ['./setup-page.component.less'],
  templateUrl: './setup-page.component.html'
})
export class SetupPageComponent implements OnInit {

  randomParagraph: string;

  constructor(private randomService: RandomService) {

  }

  ngOnInit() {
    this.randomParagraph = this.randomService.getRandomParagraph();
  }

}
