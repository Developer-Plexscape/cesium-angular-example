import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CesiumDirective } from './cesium.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CesiumDirective],
  template: '<div appCesium></div>'
})
export class AppComponent {}
