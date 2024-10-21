import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coi',
  templateUrl: './coi.page.html',
  styleUrls: ['./coi.page.scss'],
})
export class CoiPage implements OnInit {


  constructor(
    private router : Router,
  ) { }

  public selectedFood: { id: number, name: string, type: string } | null = null;


  foods = [
    {
      id: 1,
      name: '30 hari setelah pengangkatan atau penetapan',
      type: 'fruit',
    },
    {
      id: 2,
      name: '3 bulan setelah pengangkatan atau penetapan',
      type: 'vegetable',
    },
    {
      id: 3,
      name: '2 bulan setelah pengangkatan atau penetapan',
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
    this.router.navigateByUrl('/gratification');    
  }

}
