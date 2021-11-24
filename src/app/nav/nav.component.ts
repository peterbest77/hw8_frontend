import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

@Input() values:any = null;
@Input() values2:any = null;
@Input() values3:any = null;
@Output() clickEvent = new EventEmitter<any>();
@Output() clickStarEvent = new EventEmitter<any>();
@Output() clickDetailEvent = new EventEmitter<any>();
public clickstar:boolean = false;
public active: boolean = false;
public isActive:number = 0;
  constructor() { }

  clicktable() {
   this.clickEvent.emit(0);
   this.isActive = 0;
  }
  clickdetailchart(){
  this.clickEvent.emit(1);
   this.isActive = 1;
  }
  clickmeteogram(){
  this.clickEvent.emit(2);
      this.isActive = 2;

  }
  clickStar(){
    var starFill = document.getElementsByClassName("bi bi-star-fill")[0] as HTMLInputElement;
    var starOutline = document.getElementsByClassName("bi bi-star")[0] as HTMLInputElement;
     console.log(this.values2);
 var citynName: any = this.values2.city;
 var stateName:any = this.values2.state;
 console.log(citynName);
 console.log(stateName);
 var lat:any = this.values3[0];
 var lng:any = this.values3[1];
 var json = {city: citynName, state: stateName, lat:lat, lng :lng, data: this.values};
 console.log(json);
 console.log(json.city);

    if (this.clickstar === false) {
      this.clickstar = true;
       localStorage.setItem(citynName,`${JSON.stringify(json)}`);
       console.log(localStorage.length);

    }
    else if(this.clickstar === true) {
      this.clickstar= false;
      localStorage.removeItem(citynName);

    }





  }
  clickDetail() {
    this.clickDetailEvent.emit("secondary");

  }


}
