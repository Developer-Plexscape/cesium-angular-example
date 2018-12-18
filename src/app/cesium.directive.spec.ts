import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CesiumDirective } from './cesium.directive';

describe('CesiumDirective', () => {
  it('should create a Cesium viewer', () => {
    const spy = spyOn(window['Cesium'], 'Viewer');
    const fixture = TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CesiumDirective
      ]
    }).createComponent(AppComponent);
    fixture.detectChanges();
    expect(spy.calls.any()).toBe(true);
  });
});
