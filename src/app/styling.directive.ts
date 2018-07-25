import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[appStyling]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./styling.component.css'],
  encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line:component-class-suffix
export class StylingDirective {}
