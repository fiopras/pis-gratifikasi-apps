import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import ValidateForm from '../helpers/validate-form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
        userName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  async onSignUp() {
    let errorMessage = '';

    if (this.signUpForm.get('userName')?.hasError('required')) {
      errorMessage += 'Fullname is required. ';
    }

    if (this.signUpForm.get('email')?.hasError('required')) {
      errorMessage += 'Email is required. ';
    }

    if (this.signUpForm.get('password')?.hasError('required')) {
      errorMessage += 'Password is required. ';
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
        message: 'Signing up...',
        duration: 3000  // Set the duration for 1500 milliseconds (1.5 seconds)
      });
      loading.present();

      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res) => {
          loading.dismiss();  // Dismiss the loading indicator
          this.router.navigateByUrl('/login');
          alert(res.message);
        },
        error:(err) => {
          loading.dismiss();  // Dismiss the loading indicator in case of an error
          this.alertCtrl.create({
            header:'Error',
            message: err.error.message,
            buttons: ['Ok']
          }).then( alert => {
            alert.present();
          });
        }
      })
      
    }
  }

  // async onSignUp() {
  //   try {
  //     let errorMessage = '';
  
  //     if (this.signUpForm.get('userName')?.hasError('required')) {
  //       errorMessage += 'Fullname is required. ';
  //     }
  
  //     if (this.signUpForm.get('email')?.hasError('required')) {
  //       errorMessage += 'Email is required. ';
  //     }
  
  //     if (this.signUpForm.get('password')?.hasError('required')) {
  //       errorMessage += 'Password is required. ';
  //     }
  
  //     if (errorMessage) {
  //       this.alertCtrl.create({
  //         header: 'Error',
  //         message: errorMessage,
  //         buttons: ['Ok']
  //       }).then(alert => {
  //         alert.present();
  //       });
  //     } else {
  //       const loading = await this.loadingCtrl.create({
  //         message: 'Signing up...'
  //       });
  //       await loading.present();
  //       this.auth.signUp(this.signUpForm.value)
  //         .subscribe({
  //           next: async (res) => {
  //             await loading.dismiss();
  //             this.router.navigate(['/login']);
  //             console.log('after navigate');

  //           },
  //           error: async (err) => {
  //             await loading.dismiss();
  //             this.alertCtrl.create({
  //               header: 'Error',
  //               message: 'Sorry, something went wrong, please try again!',
  //               buttons: ['Ok']
  //             }).then(alert => {
  //               alert.present();
  //             });
  //           }
  //         });
  //     }
  //   } catch (error) {
  //     const alert = await this.alertCtrl.create({
  //       header: 'Error',
  //       message: 'Sorry, something went wrong. Please check your internet connection and try again later.',
  //       buttons: ['Ok']
  //     });
  //     await alert.present();
  //   }
  // }
  

}
