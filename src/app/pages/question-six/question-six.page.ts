import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-six',
  templateUrl: './question-six.page.html',
  styleUrls: ['./question-six.page.scss'],
})
export class QuestionSixPage implements OnInit {

  constructor(
    private router : Router,
  ) { }

  public selectedFood: { id: number, name: string, type: string } | null = null;


  foods = [
    {
      id: 1,
      name: 'Menggunakan kendaraan kantor untuk kebutuhan pribadi',
      type: 'fruit',
    },
    {
      id: 2,
      name: 'Menggunakan harta pribadi untuk kepentingan perusahaan',
      type: 'vegetable',
    },
    {
      id: 3,
      name: 'Memenangkan perusahaan saudara dalam proses pengadaan',
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
    this.router.navigateByUrl('/question-seven');
  }

}
