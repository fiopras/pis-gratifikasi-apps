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
    const Nopek =  window.localStorage.getItem('nopek_iden');
    const Nama = window.localStorage.getItem('name_iden');
    this.coiForm = this.fb.group({
      Nopek: [Nopek],
      Nama: [Nama],
      Pertanyaan1: ['', Validators.required],
      Pertanyaan2: ['', Validators.required],
      Pertanyaan3: ['', Validators.required],
      Pertanyaan4: ['', Validators.required],
      Pertanyaan5: ['', Validators.required],
      Pertanyaan6: ['', Validators.required],
      StatusCoi: ['Done'],
    });
  }

  async onSubmit() {
    let loader: HTMLIonLoadingElement | undefined = undefined;
  
    try {
      const token = await window.localStorage.getItem('access_token');
      const dataSend = this.coiForm.value;
  
      if (!dataSend.Pertanyaan1 || !dataSend.Pertanyaan2 || !dataSend.Pertanyaan3 || !dataSend.Pertanyaan4 || !dataSend.Pertanyaan5 || !dataSend.Pertanyaan6) {
        const alert = await this.alertCtrl.create({
          header: 'Alert',
          message: 'Sorry, you have to fill in all the questions.',
          buttons: ['Ok']
        });
        await alert.present();
        return;
      }
  
      loader = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
      await loader.present();
  
      console.log(dataSend);
  
      const response = await axios.post(`${environment.api_url}/ConflictOfInterests`, dataSend, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      const data = response.data;
  
      if (data.error) {
        if (loader) {
          await loader.dismiss();
        }
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'Anda sudah submit form ini terima kasih',
          buttons: ['Ok']
        });
        await alert.present();
      } else {
        setTimeout(() => {
          if (loader) {
            loader.dismiss();
          }
          this.router.navigateByUrl('/home');
        }, 1500);
      }
    } catch (error) {
      let errorMessage = 'Anda Sudah Submit Form ini Terima Kasih';
      const alert = await this.alertCtrl.create({
        header: 'Alert',
        message: errorMessage,
        buttons: ['Ok']
      });
      await alert.present();
      if (loader) {
        await loader.dismiss();
      }
      alert.onDidDismiss().then(() => {
        this.router.navigateByUrl('/home');
      });
    }
  }
  
  goToPage(url: string) {
    this.router.navigateByUrl(url);
  }

  updateFormControl(question: string, event: any) {
    console.log(question, 'test');
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
