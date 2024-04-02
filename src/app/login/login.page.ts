import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import axios from 'axios'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm!: FormGroup;

  isCaptchaValid = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private auth : AuthService

  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // email: ['', Validators.required],
      // password: ['', Validators.required],

      // Change to nopek
      nopek: ['', Validators.required],

    });
  }

  get siteKey() {
    return environment.recaptcha.siteKey;
  }

  captchaResolved(ev: any) {
    console.log("captcha resolved",ev);
    this.isCaptchaValid = true;
  }

  // async onLogin() {
  //   let errorMessage = '';
        
  //   if (this.loginForm.get('email')?.hasError('required')) {
  //     errorMessage += 'Email is required. ';
  //   }
  //   if (this.loginForm.get('password')?.hasError('required')) {
  //     errorMessage += 'Password is required. ';
  //   }

  //   if (errorMessage) {
  //     this.alertCtrl.create({
  //       header: 'Error',
  //       message: errorMessage,
  //       buttons: ['Ok']
  //     }).then(alert => {
  //       alert.present();
  //     });
  //   } else {
  //     const loading = await this.loadingCtrl.create({
  //       message: 'Logging in...'
  //     });
  //     await loading.present();
  //     this.auth.login(this.loginForm.value)
  //     .subscribe({
  //         next:(res) => {
  //           setTimeout(() => {
  //             loading.dismiss();
  //             this.loginForm.reset();
  //             this.auth.storeToken(res.token),
  //             this.router.navigateByUrl('/home');
  //           }, 1500);
  //         },
  //         error:(err) => {
  //           console.log('Error Response:', err);

  //           if (err.error && err.error.title) {
  //             console.log('Server Error Title:', err.error.title);
  //           }

  //           loading.dismiss();

  //           this.alertCtrl.create({
  //             header: 'Error',
  //             message: err.error && err.error.title ? err.error.title : 'An error occurred',
  //             buttons: ['Ok']
  //           }).then(alert => {
  //             alert.present();
  //           });
  //         }
  //     });
  //   }
  // }
  async onLogin() {
    let errorMessage = '';
    
    // if (this.loginForm.get('email')?.hasError('required')) {
    //   errorMessage += 'Email is required. ';
    // }
    // if (this.loginForm.get('password')?.hasError('required')) {
    //   errorMessage += 'Password is required. ';
    // }

    // change with authentication 
    if (this.loginForm.get('nopek')?.hasError('required')) {
      errorMessage += 'Nopek is required';
    }
  
    if (errorMessage) {
      this.alertCtrl.create({
        header: 'Error',
        message: errorMessage,
        buttons: ['Ok']
      }).then(alert => {
        alert.present();
      });
    } else {
      const loading = await this.loadingCtrl.create({
        message: 'Logging in...'
      });
      await loading.present();
  
      try {
        const response = await axios.post(`${environment.api_url}/Auth/login`, this.loginForm.value);
       
        const res = response.data;
        setTimeout(() => {
          loading.dismiss();
          this.loginForm.reset();
          this.auth.storeToken(res.token, res.nama, res.nopek);
          // console.log('successfuly login', res.token);
          
          this.router.navigateByUrl('/home');
        }, 1500);
      } catch (error) {
        loading.dismiss();
          this.alertCtrl.create({
            header: 'Error',
            message: 'Terjadi kesalahan. Silakan coba lagi.',
            buttons: ['Ok']
          }).then(alert => {
            alert.present();
          });
        // }
      }
    }
  }
  
  private showAlert(header: string, message: string): void {
    this.alertCtrl.create({
      header,
      message,
      buttons: ['Ok']
    }).then(alert => {
      alert.present();
    });
  }

}
