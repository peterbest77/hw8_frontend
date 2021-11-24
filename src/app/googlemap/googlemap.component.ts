import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  @Input() values:any;
  lat:number;
  lng :number;
  constructor() { }

  ngOnInit(): void {
    console.log(this.values);
    this.lat = parseFloat(this.values[0]);
    this.lng = parseFloat(this.values[1]);
  }

}
