import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public url: any = '';
  
  public imageItems = [
    { id: 1, imageUrl: '/assets/coic.png', url: '/conflict-of-interest' , status: false},
    { id: 2, imageUrl: '/assets/coc2.png', url: '/code-of-conduct' , status: false},
    { id: 3, imageUrl: '/assets/gratifikasi.png' , url: '/gratifikasi' , status: false},
    { id: 4, imageUrl: '/assets/gcg.png', url: '/socialization-gcg', status: false},
  ];
  isAndroid: boolean;

  constructor(
    private router: Router,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private platform: Platform

  ) {
    this.isAndroid = this.platform.is('android');

  }

  navigateTo(url: string) {
    // Cari objek dengan URL yang sesuai dalam array
    const selectedItem = this.imageItems.find(item => item.url === url);
  
    if (selectedItem) {
      // Jika status true, tampilkan pesan kesalahan
      if (selectedItem.status) {
        const errorMessage = 'Coming soon...';
  
        this.alertCtrl.create({
          header: 'Attention',
          message: errorMessage,
          buttons: ['Ok']
        }).then(alert => {
          alert.present();
        });
      } else {
        // Jika status false, lanjutkan dengan navigasi
        this.router.navigateByUrl(url);
      }
    } else {
      // Handle jika URL tidak ditemukan dalam array
      console.error('URL not found in imageItems array');
    }
  }

  ngOninit() {

  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure you want to log out?',
      message: 'Please confirm',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          },
        },
        {
          text: 'OK',
          handler: async () => {
            const loading = await this.loadingCtrl.create({
              message: 'Logging out...'
            });
  
            await loading.present();
  
            setTimeout(async () => {
              try {
                await this.auth.logout();
                // Perform any additional actions after logout if needed
                await loading.dismiss();
                this.router.navigateByUrl('/login');
              } catch (error) {
                // Handle logout error if needed
                console.error('Logout error:', error);
                await loading.dismiss();
              }
            }, 1500);
          },
        },
      ],
    });
  
    await alert.present();
  }
}