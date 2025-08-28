import { bootstrapApplication } from '@angular/platform-browser';
import { Ion } from 'cesium';
import { appConfig } from './app/app.config';
import { App } from './app/app';

(window as Record<string, any>)['CESIUM_BASE_URL'] = '/assets/cesium/';

// Uncomment the following line and add your personal access token if you are using Cesium Ion
//Ion.defaultAccessToken = '<Your access token here>';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
