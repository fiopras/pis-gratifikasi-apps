import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public router: Router
  ) {
    this.initializeApp();
  }

  // initializeApp(){
  //   this.platform.ready().then(() => {
  //     this.router.navigateByUrl('landing')
  //   });
  // }

  initializeApp() {
    this.platform.ready().then(() => {
      const appInitialized = localStorage.getItem('api_token_identifier');
      if (!appInitialized) {
        // The first time the application is loaded, direct it to 'landing' and mark that the application has been initialized
        localStorage.setItem('api_token_identifier', 'true');
        this.router.navigateByUrl('landing');
      }
    });
  }

}
