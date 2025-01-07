import { Component } from '@angular/core';

import { CesiumDirective } from './cesium.directive';

@Component({
  selector: 'app-root',
  imports: [CesiumDirective],
  template: '<div appCesium></div>'
})
export class AppComponent {}
