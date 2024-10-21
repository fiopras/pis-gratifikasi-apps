import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-eight',
  templateUrl: './question-eight.page.html',
  styleUrls: ['./question-eight.page.scss'],
})
export class QuestionEightPage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  public selectedFood: { id: number, name: string, type: string } | null = null;


  foods = [
    {
      id: 1,
      name: 'Penjara 3 (tiga tahun) dan denda Rp. 100.000.000,00 ( Seratus juta rupiah)',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Penjara seumur hidup dan denda Rp. 1.000.000,000,00 (Satu miliar rupiah)',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Denda senilai gratifikasi yang diterima',
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
    this.router.navigateByUrl('/question-nine');
  }

}
