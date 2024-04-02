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

  ngOnInit() {
  }

  next() {
    console.log('next');
    
  }

}
