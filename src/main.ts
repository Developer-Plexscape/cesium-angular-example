import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ion } from 'cesium';

import { AppModule } from './app/app.module';

(window as Record<string, any>)['CESIUM_BASE_URL'] = '/assets/cesium/';

// Uncomment the following line and add your personal access token if you are using Cesium Ion
//Ion.defaultAccessToken = '<Your access token here>';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
