import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  homeBackImg :string="assets/images/bacground.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
