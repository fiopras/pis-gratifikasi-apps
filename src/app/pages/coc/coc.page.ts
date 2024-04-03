import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coc',
  templateUrl: './coc.page.html',
  styleUrls: ['./coc.page.scss'],
})
export class CocPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  backTo() {
    this.router.navigateByUrl('/home');
  }

}
