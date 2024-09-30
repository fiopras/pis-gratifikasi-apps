import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-code-of-conduct',
  templateUrl: './code-of-conduct.page.html',
  styleUrls: ['./code-of-conduct.page.scss'],
})
export class CodeOfConductPage implements OnInit {
  public hasViewedPdf: boolean = false;

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
    const Nopek =  window.localStorage.getItem('nopek_iden');
  const Nama = window.localStorage.getItem('name_iden');


    this.cocForm = this.fb.group({
      Nopek: [Nopek],
      Nama: [Nama],
      StatusCoc: ['Done'],
    });
    this.userDataLocalStorage()
    console.log(this.hasViewedPdf);

  }

  

  async pdfView() {

    console.log('ketika button di click');
    console.log(this.hasViewedPdf);

    const pdf = "https://apps.pertamina.com/pis-gratifikasi-mobile/images/Pedoman-COC.PDF";

    window.open(pdf, '_system');

    this.hasViewedPdf = true;

    console.log(this.hasViewedPdf);
    

    // if (this.loader) {
    //   await this.loader.dismiss();  
    // }
    
    // let pdfUrl = "https://ptmpisappdev01.pertamina.com/pis-gratifikasi-mobile/images/Pedoman-COC.PDF";
  
    // if (Capacitor.getPlatform() === 'web') {
    //   // pdfUrl = 

    //   window.open(pdfUrl, '_system');

    // } else if (Capacitor.getPlatform() === 'ios' || Capacitor.getPlatform() === 'android') {
    //   pdfUrl = Capacitor.convertFileSrc('/assets/pdf/Pedoman-COC.PDF');
    // }
  
    // try {
    //   await Browser.open({
    //     url: pdfUrl
    //   });
    //   this.hasViewedPdf = true;
    //   console.log(this.hasViewedPdf);
    // } catch (error) {
    //   console.error('Error opening PDF:', error);
    //   const alert = await this.alertCtrl.create({
    //     header: 'Error',
    //     message: 'Unable to display PDF. Please try again later.',
    //     buttons: ['OK']
    //   });
    //   await alert.present();
    // }
  }

  // async doSubmit() {
  //   if (!this.hasViewedPdf) {
  //     const alert = await this.alertCtrl.create({
  //       header: 'Alert',
  //       message: 'You must read the PDF first before submitting.',
  //       buttons: ['OK']
  //     });
  //     await alert.present();
  //   } else {
  //     const alert = await this.alertCtrl.create({
  //       header: 'Finish Your Submission',
  //       message: 'Are you sure you want to finish your submission?',
  //       buttons: [
  //         {
  //           text: 'No',
  //           role: 'cancel',
  //           handler: () => {
  //             this.alertCtrl.dismiss();
  //           }
  //         },
  //         {
  //           text: 'Yes',
  //           handler: async () => {
  //             console.log(this.cocForm.value);

  //             // return false;

  //             try {
  //               const token = await window.localStorage.getItem('access_token');
  //               const dataSend = this.cocForm.value;

  //               const loader = await this.loadingCtrl.create({
  //                 message: 'Please wait...'
  //               });

  //               await loader.present();
      
  //               const response = await axios.post(`${environment.api_url}/CodeOfConduct`, dataSend, {
  //                 headers: {
  //                   "Content-Type": "application/json",
  //                   Authorization: `Bearer ${token}`
  //                 },
  //                 responseType: 'blob'
  //               });

  //               const data = response.data;

  //               await loader.dismiss();

  //               if (data.error) {
  //                 await loader.dismiss();
  //                 const alert = await this.alertCtrl.create({
  //                   header: 'Error',
  //                   message: data.error,
  //                   buttons: ['Ok']
  //                 });
                    
  //                 await alert.present();
  //               } else {
  //                 setTimeout(() => {
  //                   loader.dismiss();
  //                   this.router.navigateByUrl('/home')
  //                 }, 1500);
  //                 this.hasViewedPdf = false;
  //               }
  //             } catch (error) {
  //               let errorMessage = 'Anda Sudah Submit Form ini Terima Kasih';
  //               const alert = await this.alertCtrl.create({
  //                 header: 'Alert',
  //                 message: errorMessage,
  //                 buttons: ['Ok']
  //               });
  //               await alert.dismiss();
  //               alert.onDidDismiss().then(() => {
  //                 this.router.navigateByUrl('/home');
  //             });
  //             }
  //           }
  //         },
  //       ]
  //     });
  //     await alert.present();
  //   }
  // }

  async doSubmit() {
    if (!this.hasViewedPdf) {
      const alert = await this.alertCtrl.create({
        header: 'Peringatan',
        message: 'Anda harus membaca PDF terlebih dahulu sebelum mengirim.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Apakah anda yakin?',
        message: 'Apakah Anda yakin sudah membaca pdf di atas?',
        buttons: [
          {
            text: 'Tidak',
            role: 'cancel',
            handler: () => {
              this.alertCtrl.dismiss();
            }
          },
          {
            text: 'Ya',
            handler: async () => {
              console.log(this.cocForm.value);
  
              let loader;
              try {
                const token = await window.localStorage.getItem('access_token');
                const dataSend = this.cocForm.value;
  
                loader = await this.loadingCtrl.create({
                  message: 'Mohon tunggu...'
                });
  
                await loader.present();
      
                const response = await axios.post(`${environment.api_url}/CodeOfConduct`, dataSend, {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                  },
                  responseType: 'blob'
                });
  
                const data = response.data;
  
                await loader.dismiss();
  
                if (data.error) {
                  const errorAlert = await this.alertCtrl.create({
                    header: 'Kesalahan',
                    message: data.error,
                    buttons: ['Ok']
                  });
                  await errorAlert.present();
                } else {
                  setTimeout(() => {
                    this.router.navigateByUrl('/home');
                    this.hasViewedPdf = false;
                  }, 1500);
                }
              } catch (error) {
                let errorMessage = 'Anda Sudah Submit Form ini. Terima Kasih';
                if (loader) {
                  await loader.dismiss(); // Pastikan loader dihentikan jika terjadi kesalahan
                }
                const errorAlert = await this.alertCtrl.create({
                  header: 'Peringatan',
                  message: errorMessage,
                  buttons: ['Ok']
                });
                await errorAlert.present();
                errorAlert.onDidDismiss().then(() => {
                  this.router.navigateByUrl('/home');
                });
              }
            }
          },
        ]
      });
      await alert.present();
    }
  }
  

  async userDataLocalStorage() {
    const name = await window.localStorage.getItem('name_iden');
    const nopek = await window.localStorage.getItem('nopek_iden');

    // Create a Object 
    this.user = {
      name  : name,
      nopek : nopek,
    }
  }


  async onSubmit() {
    console.log('test pencet');
    
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
