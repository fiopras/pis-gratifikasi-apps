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

  ngOnInit() {
  }

  next() {
    this.router.navigateByUrl('/coi');
  }

}
