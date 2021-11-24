import { Component, OnInit } from '@angular/core';

import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  providers:[NgbProgressbarConfig]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
