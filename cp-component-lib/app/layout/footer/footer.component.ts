import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpl-footer',
  styleUrls: ['./footer.component.less'],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  copyrightyear = { value: new Date().getFullYear().toString() };

  ngOnInit() {
  }

}
