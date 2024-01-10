import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-code-of-conduct',
  templateUrl: './code-of-conduct.page.html',
  styleUrls: ['./code-of-conduct.page.scss'],
})
export class CodeOfConductPage implements OnInit {
  private hasViewedPdf: boolean = false;
  user: any = [];

  cocForm!: FormGroup;

  constructor(
    private loader: LoadingController,
    private alertCtrl: AlertController,
    private fb: FormBuilder,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit(): void {
    this.cocForm = this.fb.group({
      userId: [''],
      alreadyReadIt: ['True'],
    });
    this.GetUser();
  }

  async pdfView() {
    let pdfUrl = "/assets/pdf/Pedoman-COC.PDF";
    await Browser.open({
      url: pdfUrl
    });
    this.hasViewedPdf = true;
  }

  async doSubmit() {
    if (!this.hasViewedPdf) {
      const alert = await this.alertCtrl.create({
        header: 'Alert',
        message: 'You must read the PDF first before submitting.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Finish Your Submission',
        message: 'Are you sure you want to finish your submission?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              this.alertCtrl.dismiss();
            }
          },
          {
            text: 'Yes',
            handler: async () => {
              console.log(this.cocForm.value);

              try {
                const token = await window.localStorage.getItem('access_token');
                const dataSend = this.cocForm.value;

                const loader = await this.loadingCtrl.create({
                  message: 'Please wait...'
                });
                await loader.present();
      
                const response = await axios.post(`${environment.api_url}/CodeOfConduct`, dataSend, {
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
                    this.router.navigateByUrl('/home')
                  }, 1500);
                  this.hasViewedPdf = false;
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
          },
        ]
      });
      await alert.present();
    }
  }

  async GetUser() {
    try {
      const token = await window.localStorage.getItem('access_token');
      
      const response = await axios.get(`${environment.api_url}/Auth/GetUserLog`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      const data = response.data;

      if(data.error) {
        const loader = await this.loadingCtrl.create({
          message: 'Please Wait...'
        });
        await loader.dismiss();
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: data.error_message,
          buttons: ['Ok']
        });
        await alert.present();
        return;
      }
      this.user = data;

      this.cocForm.patchValue({
        userId: this.user.id,
      });

    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Sorry, something went wrong. Please try again',
        buttons: ['Ok']
      });
      await alert.present();
    }
  }
}
