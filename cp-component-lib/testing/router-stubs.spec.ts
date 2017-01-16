/* tslint:disable */
// Disabled because using stub from
// https://github.com/angular/angular.io/blob/2b7fb868908527ba9fecb2e2c549143694aad363/public/docs/_examples/testing/ts/testing/router-stubs.ts
export { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';

import { NgModule, Component, Directive, Injectable, Input } from '@angular/core';
import { NavigationExtras } from '@angular/router';

// #docregion router-link
@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
// #enddocregion router-link

@Component({selector: 'router-outlet', template: ''})
export class RouterOutletStubComponent { }

@Injectable()
export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) { }
}


// Only implements params and part of snapshot.params
// #docregion activated-route-stub
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return { params: this.testParams };
  }
}

@NgModule({
  declarations: [
    RouterLinkStubDirective
  ]
})
export class TestingModule { }

/* tslint:enable */
