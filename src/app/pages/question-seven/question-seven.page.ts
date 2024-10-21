import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-seven',
  templateUrl: './question-seven.page.html',
  styleUrls: ['./question-seven.page.scss'],
})
export class QuestionSevenPage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  public selectedFood: { id: number, name: string, type: string } | null = null;


  foods = [
    {
      id: 1,
      name: '10 hari kalender',
      type: 'fruit',
    },
    {
      id: 2,
      name: '14 hari kalender',
      type: 'vegetable',
    },
    {
      id: 3,
      name: '20 hari kalender',
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
    this.router.navigateByUrl('/question-eight');
  }

}
