import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import axios from 'axios';


@Component({
  selector: 'app-conflict-of-interest',
  templateUrl: './conflict-of-interest.page.html',
  styleUrls: ['./conflict-of-interest.page.scss'],
})
export class ConflictOfInterestPage implements OnInit {


  // private baseUrl: string = 'http://127.0.0.1:8000/api/'
  coiForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http : HttpClient,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.coiForm = this.fb.group({
      Question1: ['', Validators.required],
      Question2: ['', Validators.required],
      Question3: ['', Validators.required],
      Question4: ['', Validators.required],
      Question5: ['', Validators.required],
      Question6: ['', Validators.required],
    });
  }

  async onSubmit() {
    try {
      const token = await window.localStorage.getItem('access_token');
      const dataSend = this.coiForm.value;
  
      const loader = await this.loadingCtrl.create({
        message: 'Please Wait...'
      });
      await loader.present();
  
      const response = await axios.post(`${environment.api_url}/ConflictOfInterests`, dataSend, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data;
      if (data.error) {
        await loader.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: data.error_message,
          buttons: ['Ok']
        });
        await alert.present();
      } else {
        setTimeout(() => {
          loader.dismiss();
          this.router.navigateByUrl('/conflict-of-interest/coi-detail')
        }, 1000);
      }
    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Sorry, something went wrong. Please check your internet connection and try again later.',
        buttons: ['Ok']
      });
      await alert.present();
    }
  }


  goToPage(url: string) {
    this.router.navigateByUrl(url);
  }
  


  // async onSubmit() {
  //   try {
  //     const token = await this.storage.get(environment.access_token_identifier);
      
  //     const loader = await this.loadingCtrl.create({
  //       message: 'Wait'
  //     });
  //     await loader.present();
  
  //     const response = await axios.post(`${this.apiUrl}/submit-question`, dataToSend, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  
  //     const data = response.data;
  
  //     if (data.error) {
  //       await loader.dismiss();
  //       const alert = await this.alertCtrl.create({
  //         header: 'Error',
  //         message: data.error_message,
  //         buttons: ['Ok']
  //       });
  //       await alert.present();
  //     } else {
  //       setTimeout(() => {
  //         loader.dismiss();
  //       }, 100);
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
  

  updateFormControl(question: string, event: any) {
    console.log(question);
    this.coiForm.get(question)?.setValue(event.detail.value);
  }
  

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Successfully Submitted',
      // subHeader: 'Your Response Has Been Sent',
      message: 'Thank You For Submitting',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'OK',
          handler: () => {
            console.log('OK clicked');
            // Redirect ke halaman /Home
            this.router.navigate(['/home']);
          },
        },
      ],
    });
  
    await alert.present();
  }

}
