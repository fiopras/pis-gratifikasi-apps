import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-question-ten',
  templateUrl: './question-ten.page.html',
  styleUrls: ['./question-ten.page.scss'],
})
export class QuestionTenPage implements OnInit {

  sociallizationForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  public selectedFood: { id: number, name: string, type: string } | null = null;


  foods = [
    {
      id: 1,
      name: 'Pihak eksternal yang bertindak untuk dan atas nama Pertamina',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Semuanya benar',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Insan Pertamina',
      type: 'dessert',
    },
  ];

  trackItems(index: number, item: any) {
    return item.id;
  }

  handleChange(ev: any) {
    this.selectedFood = ev.detail.value;
    console.log('Selected food:', this.selectedFood);
  }

  ngOnInit() {
    const Nopek = window.localStorage.getItem('nopek_iden');
    const Nama = window.localStorage.getItem('name_iden');

    this.sociallizationForm = this.fb.group({
      Nopek: [Nopek],
      Nama: [Nama],
      StatusSgcg: ['Done']
    });
  }

  // next() {
  //   this.router.navigateByUrl('/question-ten');
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

}
