import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  canActivate(): boolean{
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.alertCtrl.create({
        header:'Error',
        message: 'Please Login First',
        buttons: ['Ok']
       }).then( alert => {
        alert.present();
       });
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
