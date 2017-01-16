import { Directive, ElementRef, Input, OnChanges, Renderer } from '@angular/core';

@Directive({
  selector: '[cplHighlight]'
})
export class HighlightDirective implements OnChanges {

  _defaultColor = 'rgb(211, 211, 211)'; // lightgray

  @Input() cplHighlight: string;

  @Input() set defaultColor(colorName: string){
    this._defaultColor = colorName || this._defaultColor;
  }

  constructor(private renderer: Renderer, private el: ElementRef) {
    renderer.setElementProperty(el.nativeElement, 'customProperty', true);
  }

  ngOnChanges() {
    this.renderer.setElementStyle(
      this.el.nativeElement, 'backgroundColor',
      this.cplHighlight || this._defaultColor );
  }

}
