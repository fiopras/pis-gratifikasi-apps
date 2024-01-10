import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coi-detail',
  templateUrl: './coi-detail.page.html',
  styleUrls: ['./coi-detail.page.scss'],
})
export class CoiDetailPage implements OnInit {

  @ViewChild('parafImage') parafImage!: ElementRef<HTMLImageElement>;

  user: any = [];

  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.GetUser();
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
          message: 'Please wait...'
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

    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Sorry, something went wrong. Please try again',
        buttons: ['Ok']
      });
      await alert.present();
    }
  }


  async doSubmit() {
    const alert = await this.alertCtrl.create({
      header: 'Finish Your Submission',
      message: 'Are you to finish your submission ?',
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
            const loader = await this.loadingCtrl.create({
              message: 'Wait...'
            });
            await loader.present();

            setTimeout(() => {
              loader.dismiss();
              this.router.navigateByUrl('/home');
              
            }, 1000);
          }
        },
      ]
    });
    await alert.present();
  }
}
