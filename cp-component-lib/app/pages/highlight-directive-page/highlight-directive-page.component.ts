import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'cpl-highlight-directive-page',
  styleUrls: ['./highlight-directive-page.component.less'],
  templateUrl: './highlight-directive-page.component.html',
})
export class HighlightDirectivePageComponent implements OnInit, AfterViewInit {
  isActive: string = 'html';
  htmlContent: string;
  htmlContent2: string;
  htmlContent3: string;

  constructor(private el: ElementRef, private service: HighlightJsService) {
  }

  ngOnInit() {
    this.addContent();
  }

  ngAfterViewInit() {
    this.highlightByService(this.el.nativeElement.querySelector('pre#example1'));
    this.highlightByService(this.el.nativeElement.querySelector('pre#example2'));
    this.highlightByService(this.el.nativeElement.querySelector('pre#example3'));
  }

  highlightByService(target: ElementRef) {
    this.service.highlight(target);
  }

  addContent() {
    this.htmlContent = `
      &lt;h2 cplHighlight="lightgreen"&gt;{{'nav.highlightDirective' | translate}}&lt;/h2&gt;
    `;

    this.htmlContent2 = `
    &lt;h2 [cplHighlight]="color" [defaultColor]="'gold'">Highlight me!&lt;h2&gt;
    &lt;div&gt;
      &lt;input type="radio" name="colors" (click)="color='lightgreen'"&gt;Green
      &lt;input type="radio" name="colors" (click)="color='yellow'"&gt;Yellow
      &lt;input type="radio" name="colors" (click)="color='cyan'"&gt;Cyan
    &lt;div>`;

    this.htmlContent3 = `
    &lt;h2 [cplHighlight]="color" [defaultColor]="'#ff696d'" class="example2">{{'Click a Color!' | translate}}</h2>
    &lt;table>
      &lt;tr>
        &lt;td cplHighlight="skyblue"  (click)="color='skyblue'">&nbsp;</td>
        &lt;td cplHighlight="lightgreen" (click)="color='lightgreen'">&nbsp;</td>
        &lt;td cplHighlight="mediumvioletred" (click)="color='mediumvioletred'">&nbsp;</td>
      &lt;tr>
      &lt;tr>
        &lt;td cplHighlight="turquoise" (click)="color='turquoise'">&nbsp;</td>
        &lt;td cplHighlight="darkcyan" (click)="color='darkcyan'">&nbsp;</td>
        &lt;td cplHighlight="crimson" (click)="color='crimson'">&nbsp;</td>
      &lt;tr>
      &lt;tr>
        &lt;td cplHighlight="gold" (click)="color='gold'">&nbsp;</td>
        &lt;td cplHighlight="lightsalmon" (click)="color='lightsalmon'">&nbsp;</td>
        &lt;td cplHighlight="orange" (click)="color='orange'">&nbsp;</td>
      &lt;tr>
    &lt;table>
    `;

  }
}
