import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gratifikasi',
  templateUrl: './gratifikasi.page.html',
  styleUrls: ['./gratifikasi.page.scss'],
})
export class GratifikasiPage implements OnInit {

  public isAccordionExpanded: boolean = false; 

  public showForm: boolean = false;

  gratifikasiForm!: FormGroup;

  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit(): void {
    const nopek =  window.localStorage.getItem('nopek_iden');
    const nama =  window.localStorage.getItem('name_iden');

    this.gratifikasiForm = this.fb.group({
      nopek: [nopek],
      nama: [nama],
      keterangan: [''],
      NamaPemberi: [''],
      AlasanPemberian: [''],
      HubunganPekerjaan: [''],
      Objek_jasa: [''],
      Kronologis: [''],
    });
  }

  async onSubmit() {
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
            try {
              const token = await window.localStorage.getItem('access_token');
              const dataSend = this.gratifikasiForm.value;

              const loader = await this.loadingCtrl.create({
                message: 'Please Wait...'
              });
              await loader.present();

              const response = await axios.post(`${environment.api_url}/GratifikasiReports`, dataSend, {
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
              }

              setTimeout(() => {
                loader.dismiss();
                this.router.navigateByUrl('/home');
              }, 1000);
              
            } catch (error) {
              const alert = await this.alertCtrl.create({
                header: 'Error',
                message: 'Sorry, something went wrong. Please try again',
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

  activedForm(event: any) {
    const selectedValue = event.detail.value;
    
    if (selectedValue === 'Ada Penerimaan') {
      this.showForm = true;
    } else {
      this.showForm = false;
    }

  }

}
