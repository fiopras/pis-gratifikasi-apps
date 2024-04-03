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

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/coc');
  }

}
