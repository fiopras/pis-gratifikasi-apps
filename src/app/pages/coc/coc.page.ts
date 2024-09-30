import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Capacitor } from '@capacitor/core';



@Component({
  selector: 'app-coc',
  templateUrl: './coc.page.html',
  styleUrls: ['./coc.page.scss'],
})
export class CocPage implements OnInit {


  sociallizationForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController

  ) { }

  ngOnInit() {
    const Nopek = window.localStorage.getItem('nopek_iden');
    const Nama = window.localStorage.getItem('name_iden');

    this.sociallizationForm = this.fb.group({
      Nopek: [Nopek],
      Nama: [Nama],
      StatusSgcg: ['Done']
    });


  }

  backTo() {
    this.router.navigateByUrl('/home');
  }

  // async doSubmit() {
  //   let loader: HTMLIonLoadingElement | undefined  = undefined;

  //   try {
  //     const token = await window.localStorage.getItem('access_token');
  //     const dataSend = this.sociallizationForm.value;


  //     loader = await this.loadingCtrl.create({
  //       message: 'Please wait...'
  //     });

  //     await loader.present();
  //     console.log(dataSend);

  //     const response = await axios.post(`${environment.api_url}/Socializations`, dataSend, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`
  //       }
  //     });

  //     const data = response.data;

  //     if (data.error) {
  //       if (loader) {
  //         await loader.dismiss();
  //       }
  //       const alert = await this.alertCtrl.create({
  //         header: 'Error',
  //         message: 'Anda sudah submit form ini termia kasih',
  //         buttons: ['Ok']
  //       });

  //       await alert.present();
  //     } else {
  //       setTimeout(() => {
  //         if(loader) {
  //           loader.dismiss();
  //         }
  //         this.router.navigateByUrl('/home');
  //       }, 1500);
  //     }
      

  //   } catch (error) {
  //     let errorMessage = 'Anda Sudah Submit Form ini Terima Kasih';
  //     const alert = await this.alertCtrl.create({
  //       header: 'Alert',
  //       message: errorMessage,
  //       buttons: ['Ok']
  //     });
  //     await alert.present();
  //     if (loader) {
  //       await loader.dismiss();
  //     }
  //     alert.onDidDismiss().then(() => {
  //       this.router.navigateByUrl('/home');
  //     });
  //   }
  // }

//   async doSubmit() {
//     let loader: HTMLIonLoadingElement | undefined = undefined;

//     try {
//         const token = await window.localStorage.getItem('access_token');
//         const dataSend = this.sociallizationForm.value;

//         loader = await this.loadingCtrl.create({
//             message: 'Please wait...'
//         });

//         await loader.present();
//         console.log(dataSend);

//         const response = await axios.post(`${environment.api_url}/Socializations`, dataSend, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             responseType: 'blob' // Specify that the response type is a blob
//         });

//         const data = response.data;

//         // Check if the response is a JSON error message
//         if (response.headers['content-type'].includes('application/json')) {
//             const text = await data.text();
//             const jsonResponse = JSON.parse(text);

//             if (jsonResponse.error) {
//                 if (loader) {
//                     await loader.dismiss();
//                 }
//                 const alert = await this.alertCtrl.create({
//                     header: 'Error',
//                     message: 'Anda sudah submit form ini terima kasih',
//                     buttons: ['Ok']
//                 });

//                 await alert.present();
//                 return;
//             }
//         } else {
//             // Create a URL for the PDF blob and open it
//             const url = window.URL.createObjectURL(data);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = 'Certificate.pdf'; // Set the desired file name
//             document.body.appendChild(link); // Append to DOM to trigger download in Android
//             link.click();
//             document.body.removeChild(link); // Clean up

//             if (loader) {
//                 await loader.dismiss();
//             }

//             this.router.navigateByUrl('/home');
//         }
//     } catch (error) {
//         let errorMessage = 'Anda Sudah Submit Form ini Terima Kasih';
//         console.error('Submission error:', error); // Log the error for debugging
//         const alert = await this.alertCtrl.create({
//             header: 'Alert',
//             message: errorMessage,
//             buttons: ['Ok']
//         });
//         await alert.present();
//         if (loader) {
//             await loader.dismiss();
//         }
//         alert.onDidDismiss().then(() => {
//             this.router.navigateByUrl('/home');
//         });
//     }
// }

// async doSubmit() {
//     let loader: HTMLIonLoadingElement | undefined = undefined;

//     try {
//         const token = await window.localStorage.getItem('access_token');
//         const dataSend = this.sociallizationForm.value;

//         loader = await this.loadingCtrl.create({
//             message: 'Mohon tunggu...'
//         });

//         await loader.present();
//         console.log(dataSend);

//         const response = await axios.post(`${environment.api_url}/Socializations`, dataSend, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             responseType: 'blob' // Menentukan bahwa tipe respons adalah blob
//         });

//         const data = response.data;

//         // Periksa apakah respons adalah pesan kesalahan JSON
//         if (response.headers['content-type'].includes('application/json')) {
//             const text = await data.text();
//             const jsonResponse = JSON.parse(text);

//             if (jsonResponse.error) {
//                 if (loader) {
//                     await loader.dismiss();
//                 }
//                 const alert = await this.alertCtrl.create({
//                     header: 'Error',
//                     message: 'Anda sudah submit form ini terima kasih',
//                     buttons: ['Ok']
//                 });

//                 await alert.present();
//                 return;
//             }
//         } else {
//             // Membuat URL untuk blob PDF dan membukanya di browser
//             const url = window.URL.createObjectURL(data);
//             try {
//                 await Browser.open({
//                     url: url
//                 });
//             } catch (error) {
//                 console.error('Error membuka PDF:', error);
//                 const alert = await this.alertCtrl.create({
//                     header: 'Error',
//                     message: 'Tidak dapat membuka PDF. Silakan coba lagi nanti.',
//                     buttons: ['OK']
//                 });
//                 await alert.present();
//             }

//             if (loader) {
//                 await loader.dismiss();
//             }

//             this.router.navigateByUrl('/home');
//         }
//     } catch (error) {
//         let errorMessage = 'Anda sudah submit form ini. Terima kasih';
//         console.error('Kesalahan pengiriman:', error); // Log kesalahan untuk debugging
//         const alert = await this.alertCtrl.create({
//             header: 'Alert',
//             message: errorMessage,
//             buttons: ['Ok']
//         });
//         await alert.present();
//         if (loader) {
//             await loader.dismiss();
//         }
//         alert.onDidDismiss().then(() => {
//             this.router.navigateByUrl('/home');
//         });
//     }
// } 

// async doSubmit() {
//     let loader: HTMLIonLoadingElement | undefined = undefined;

//     try {
//         const token = await window.localStorage.getItem('access_token');
//         const dataSend = this.sociallizationForm.value;

//         loader = await this.loadingCtrl.create({
//             message: 'Mohon tunggu...'
//         });

//         await loader.present();
//         console.log(dataSend);

//         const response = await axios.post(`${environment.api_url}/Socializations`, dataSend, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             responseType: 'blob' // Menentukan bahwa tipe respons adalah blob
//         });

//         const data = response.data;

//         // Periksa apakah respons adalah pesan kesalahan JSON
//         if (response.headers['content-type'].includes('application/json')) {
//             const text = await data.text();
//             const jsonResponse = JSON.parse(text);

//             if (jsonResponse.error) {
//                 if (loader) {
//                     await loader.dismiss();
//                 }
//                 const alert = await this.alertCtrl.create({
//                     header: 'Error',
//                     message: 'Anda sudah submit form ini terima kasih',
//                     buttons: ['Ok']
//                 });

//                 await alert.present();
//                 return;
//             }
//         } else {
//             // Membuat URL untuk blob PDF dan membukanya di browser
//             const fileReader = new FileReader();
//             fileReader.onload = async () => {
//                 const blobUrl = fileReader.result as string;
//                 try {
//                     await Browser.open({
//                         url: blobUrl
//                     });
//                 } catch (error) {
//                     console.error('Error membuka PDF:', error);
//                     const alert = await this.alertCtrl.create({
//                         header: 'Error',
//                         message: 'Tidak dapat membuka PDF. Silakan coba lagi nanti.',
//                         buttons: ['OK']
//                     });
//                     await alert.present();
//                 }

//                 if (loader) {
//                     await loader.dismiss();
//                 }

//                 this.router.navigateByUrl('/home');
//             };
//             fileReader.readAsDataURL(data);
//         }
//     } catch (error) {
//         let errorMessage = 'Anda sudah submit form ini. Terima kasih';
//         console.error('Kesalahan pengiriman:', error); // Log kesalahan untuk debugging
//         const alert = await this.alertCtrl.create({
//             header: 'Alert',
//             message: errorMessage,
//             buttons: ['Ok']
//         });
//         await alert.present();
//         if (loader) {
//             await loader.dismiss();
//         }
//         alert.onDidDismiss().then(() => {
//             this.router.navigateByUrl('/home');
//         });
//     }
// }

async doSubmit() {
    let loader: HTMLIonLoadingElement | undefined = undefined;

    try {
        const token = await window.localStorage.getItem('access_token');
        const dataSend = this.sociallizationForm.value;

        loader = await this.loadingCtrl.create({
            message: 'Mohon tunggu...'
        });

        await loader.present();
3
        const response = await axios.post(`${environment.api_url}/Socializations`, dataSend, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            responseType: 'blob' // Menentukan bahwa tipe respons adalah blob
        });

        const data = response.data;

        // Periksa apakah respons adalah pesan kesalahan JSON
        if (response.headers['content-type'].includes('application/json')) {
            const jsonResponse = JSON.parse(data as string);

            if (jsonResponse.error) {
                await loader.dismiss();

                const alert = await this.alertCtrl.create({
                    header: 'Error',
                    message: 'Anda sudah submit form ini. Terima kasih',
                    buttons: ['Ok']
                });

                await alert.present();
                return;
            }
        } else {
            console.log('masuk kesini');
            
            // Buka URL PDF di browser baru
            const pdfUrl = 'https://ptmpisappdev01.pertamina.com/pis-gratifikasi-mobile/images/Certificate.pdf';
            // const pdfUrl = '\\\\ptmkpshare1.pertamina.com\\ictpis\\gratifikasiMobile\\Certificate.pdf';
            
            window.open(pdfUrl, '_system');
            this.router.navigateByUrl('/home');


            if (loader) {
                await loader.dismiss();
            }
        }
    } catch (error) {
        // let errorMessage = 'Anda Sudah Submit Form ini. Terima Kasih';
        // console.error('Anda Sudah Submit Form ini. Terima Kasih', error); // Log kesalahan untuk debugging
        // const alert = await this.alertCtrl.create({
        //     header: 'Alert',
        //     message: errorMessage,
        //     buttons: ['Ok']
        // });
        // await alert.present();
        // alert.onDidDismiss().then(() => {
        //     this.router.navigateByUrl('/home');
        // });
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



//   async doSubmit() {
//     let loader: HTMLIonLoadingElement | undefined = undefined;

//     try {
//         const token = await window.localStorage.getItem('access_token');
//         const dataSend = this.sociallizationForm.value;

//         loader = await this.loadingCtrl.create({
//             message: 'Please wait...'
//         });

//         await loader.present();
//         console.log(dataSend);

//         const response = await axios.post(`${environment.api_url}/Socializations`, dataSend, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             responseType: 'blob' // Add this line to indicate the response type is a blob
//         });

//         const data = response.data;

//         if (response.headers['content-type'] === 'application/json') {
//             const text = await response.data.text();
//             const jsonResponse = JSON.parse(text);

//             if (jsonResponse.error) {
//                 if (loader) {
//                     await loader.dismiss();
//                 }
//                 const alert = await this.alertCtrl.create({
//                     header: 'Error',
//                     message: 'Anda sudah submit form ini terima kasih',
//                     buttons: ['Ok']
//                 });

//                 await alert.present();
//             }
//         } else {
//             // Create a URL for the PDF blob and open it
//             const url = window.URL.createObjectURL(data);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = 'Certificate.pdf'; // Set the desired file name
//             link.click();
            
//             if (loader) {
//                 await loader.dismiss();
//             }

//             this.router.navigateByUrl('/home');
//         }
//     } catch (error) {
//         let errorMessage = 'Anda Sudah Submit Form ini Terima Kasih';
//         const alert = await this.alertCtrl.create({
//             header: 'Alert',
//             message: errorMessage,
//             buttons: ['Ok']
//         });
//         await alert.present();
//         if (loader) {
//             await loader.dismiss();
//         }
//         alert.onDidDismiss().then(() => {
//             this.router.navigateByUrl('/home');
//         });
//     }
// }

// async doSubmit() {
//   let loader: HTMLIonLoadingElement | undefined = undefined;

//   try {
//       loader = await this.loadingCtrl.create({
//           message: 'Please wait...'
//       });

//       await loader.present();
      
//       // Path file PDF lokal
//       const localFilePath = 'assets/pdf/Certificate.pdf';

//       // Unduh file PDF
//       const response = await fetch(localFilePath);
//       const blob = await response.blob();

//       // Simpan file menggunakan FileSaver.js
//       // saveAs(blob, 'Certificate.pdf');

//       window.open('/assets/pdf/Certficate.pdf', '_blank');

//       if (loader) {
//           await loader.dismiss();
//       }

//       this.router.navigateByUrl('/home');
//   } catch (error) {
//       let errorMessage = 'Failed to download PDF file';
//       const alert = await this.alertCtrl.create({
//           header: 'Error',
//           message: errorMessage,
//           buttons: ['Ok']
//       });
//       await alert.present();
//       if (loader) {
//           await loader.dismiss();
//       }
//       alert.onDidDismiss().then(() => {
//           this.router.navigateByUrl('/home');
//       });
//   }
// }


}
