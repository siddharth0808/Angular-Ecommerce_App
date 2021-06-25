import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.scss']
})
export class HeaderFooterComponent implements OnInit {

  @Input() isMaiHeaderRequired = false;
  constructor() { }

  ngOnInit(): void {
  }

}
