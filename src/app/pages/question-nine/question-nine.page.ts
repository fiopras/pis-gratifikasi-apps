import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-nine',
  templateUrl: './question-nine.page.html',
  styleUrls: ['./question-nine.page.scss'],
})
export class QuestionNinePage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  public selectedFood: { id: number, name: string, type: string } | null = null;


  foods = [
    {
      id: 1,
      name: 'Mengikuti organisasi politik yang dapat mendukung karir',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Memanfaatkan jabatan untuk kepentingan pribadi',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Membaca, memahami, dan mengimplementasikan Code of Conduct',
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
    this.router.navigateByUrl('/question-ten');
  }

}
