import { Component } from '@angular/core';

import { Cesium } from './cesium';

@Component({
  selector: 'app-root',
  imports: [Cesium],
  template: '<div appCesium></div>'
})
export class App {}
