import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.page.html',
  styleUrls: ['./question-four.page.scss'],
})
export class QuestionFourPage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  public selectedFood: { id: number, name: string, type: string } | null = null;


  foods = [
    {
      id: 1,
      name: 'Pemberian dalam bentuk uang atau alat tukar lainnya senilai Rp. 300.00 setiap pemberian perorang dengan total Rp. 1.000.000 dalam 1 tahun',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Pemberian dalam bentuk uang atau alat tukar lainnya senilai Rp. 600.000 setiap pemberian perorang dengan total Rp. 1000.000 dalam 1 tahun',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Pemberian dalam bentuk uang atau alat tukar lainnya senilai Rp. 400.000 setiap pemberian perorang dengan total Rp. 1000.000 dalam 1 tahun',
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
    this.router.navigateByUrl('/question-five');
  }

}
