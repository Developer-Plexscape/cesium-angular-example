import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const viewer = new Cesium.Viewer(this.el.nativeElement);
  }

}
