import { Component, ElementRef, OnInit, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sosialisasi-gcg',
  templateUrl: './sosialisasi-gcg.page.html',
  styleUrls: ['./sosialisasi-gcg.page.scss'],
})
export class SosialisasiGcgPage implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  currentVideoIndex = 0;
  isCurrentVideoComplete = false;
  titles: any = [];
  content: any = [];

  videoData = [
    {
      title: 'COMPLIANCE ONLINE SYSTEM',
      source: '/assets/videos/COMPOLS.mp4',
    },
  ];

  // {
  //   title: 'CONFLICT OF INTEREST',
  //   source: '/assets/videos/COI.mp4',
  // },
  // {
  //   title: 'SOSIALISASI GCG',
  //   source: '/assets/videos/GCG.mp4',
  // },
  // {
  //   title: 'GRATIFIKASI',
  //   source: '/assets/videos/GRATIFIKASI.mp4',
  // },
  // {
  //   title: 'CODE OF CONDUCT',
  //   source: '/assets/videos/COC.mp4',
  // },

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  // ngOnInit() {
  //   this.videoPlayer.nativeElement.addEventListener('ended', () => {
  //     this.playNextVideo();
  //   });
  // }

  ngAfterViewInit() {
    this.videoPlayer.nativeElement.addEventListener('ended', () => {
      this.isCurrentVideoComplete = true;
      console.log('Video selesai');
    });
    this.getTitle();
  }

  playNextVideo() {
        // this.router.navigateByUrl('/sosialisasi-gcg/video-coi'); // Ganti dengan rute video berikutnya

    // if (this.isCurrentVideoComplete) {
    //   this.isCurrentVideoComplete = false; // Reset status pemutaran video
    //   if (this.currentVideoIndex < this.videoData.length - 1) {
    //     this.currentVideoIndex++;
    //     this.router.navigateByUrl('/sosialisasi-gcg/video-coi'); // Ganti dengan rute video berikutnya
    //   } else {
    //     // Jika ini adalah video terakhir, lakukan sesuatu (misalnya, kembali ke halaman utama)
    //   }
    // } else {
    //   // Video belum selesai diputar, mungkin tampilkan pesan atau beri tahu pengguna
    // }

    if (this.isCurrentVideoComplete) {
      this.isCurrentVideoComplete = false; // Reset status pemutaran video
      if (this.currentVideoIndex < this.videoData.length - 1) {
        this.currentVideoIndex++;
        this.router.navigateByUrl('/sosialisasi-gcg/video-coi'); // Navigasi ke rute video berikutnya
      } else {
        // Jika ini adalah video terakhir, lakukan sesuatu (misalnya, kembali ke halaman utama)
        this.router.navigateByUrl('/sosialisasi-gcg/video-coi'); // Gantilah dengan rute halaman utama yang sesuai
      }
    } else {
      // Video belum selesai diputar, mungkin tampilkan pesan atau beri tahu pengguna
      // Contoh pesan kesalahan
      console.log('Video belum selesai diputar');
    }
  }

  async getTitle() {
    try {
      const token = await window.localStorage.getItem('access_token');

      const response = await axios.get(`${environment.api_url}/Socializations/titles`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      const data = response.data;

      if (data.error) {  
        const loader = await this.loadingCtrl.create({
          message: 'Wait...'
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
      this.titles = data.content_titles;
      this.getContent();


      console.log(this.titles[0]);
    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Sorry, something went wrong. Please check your internet connection and try again later.',
        buttons: ['Ok']
      });
      await alert.present();
    }
  }


  async getContent() {
    try {
      const token = await window.localStorage.getItem('access_token');

      const response = await axios.get(`${environment.api_url}/Socializations/content`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        params: {
          title: this.titles[0]
        }
      });

      const data = response.data;

      if (data.error) {  
        const loader = await this.loadingCtrl.create({
          message: 'Wait...'
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
      this.content = data.socializationContents[0];

      console.log(this.content);
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
