import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';
import { Viewer } from 'cesium';

@Directive({
  selector: '[appCesium]'
})
export class Cesium {
  constructor() {
    const el = inject(ElementRef);
    afterNextRender(() => new Viewer(el.nativeElement));
  }
}
