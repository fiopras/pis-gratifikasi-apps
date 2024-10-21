import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socialization-gcg',
  templateUrl: './socialization-gcg.page.html',
  styleUrls: ['./socialization-gcg.page.scss'],
})
export class SocializationGcgPage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  public selectedFood: { id: number, name: string, type: string } | null = null;


  foods = [
    {
      id: 1,
      name: 'Struktur oleh organ perusahaan untuk meningkatkan keberhasilan usaha dan akuntabilitas perusahaan',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Standar perilaku dan etika bisnis insan pertamina untuk melakukan praktek-praktek pengelolaan perusahaan yang baik',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Prinsip-prinsip yang mendasari suatu proses dan mekanisme pengelolaan perusahaan berlandaskan peraturan perundang-undangan dan etika berusaha.',
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
    
  }

  

  next() {
    this.router.navigateByUrl('/coi');
  }

}
