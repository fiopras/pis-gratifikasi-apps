import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gratification',
  templateUrl: './gratification.page.html',
  styleUrls: ['./gratification.page.scss'],
})
export class GratificationPage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  public selectedFood: { id: number, name: string, type: string } | null = null;


  foods = [
    {
      id: 1,
      name: 'Pemberian dalam rangka akikahan, pernikahan, baptis maksimal Rp. 1.100.000 (satu juta seratus ribu rupiah)',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Pemberian dari mitra maksimal Rp. 200.000.00 (dua ratus ribu rupiah)',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Pemberian kepada sesama rekan kerja maksimal per pemberian Rp. 200.000 (dua ratus ribu rupiah)',
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
    this.router.navigateByUrl('/question-four');
  }

}
