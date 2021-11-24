import { Component } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
];


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],

})
export class AppComponent {

  title = 'hw8';
  counter: number = 0;
  list: Array<number> = [1, 2];
  public  clickNum:any = null;
  public data:any = null;
  public  data2:any = null;
  public  day:any = null;
  public  isday: boolean = false;
  public  loc:any = null;
  public  seletResOrFav:string = "";
  public  selectClearOrReset:number = 0;
  public  isFav:boolean = false;
  public  isEmpty:boolean=false;
  public  isDaily :boolean = false;
  public table:boolean = false;
  public isRes:boolean = true;
onNext() {
    if (this.counter != this.list.length - 1) {
      this.counter++;
    }
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
    getChildEvent(data:any){
      console.log("enter getChillEvent!");

      this.data = data;
      console.log(this.data);
      console.log(this.data['data']);

    }
   getChildEvent2(data:any){
      console.log("enter getChillEvent!");

      this.data2 = data;
      console.log(this.data2);


    }
    seletnavbar(data:any){
      this.clickNum =  data;
        this.isDaily = false;
      //    var table1 = document.getElementsByClassName("table1")[0] as HTMLInputElement;
      // table1.style.display = "block";

    }
    getNavNum(data:any) {
      this.clickNum = data;
        this.isDaily = false;

      //    var table1 = document.getElementsByClassName("table1")[0] as HTMLInputElement;
      // table1.style.display = "block";
    }
    getDayDetail(data:any) {

      this.day = data[0];
      console.log(this.day);
      this.isday = true;
      this.clickNum=data[1];
      var nav = document.getElementsByClassName("nav1")[0] as HTMLInputElement;
      nav.style.display= 'none';
        this.isDaily = false;
      //    var table1 = document.getElementsByClassName("table1")[0] as HTMLInputElement;
      // table1.style.display = "block";
      this.onNext();

    }
    getLoc(data:any){
      this.loc = data;
      console.log(data[0]);
      console.log(data[1]);


    }
    getClickListEvent(data:any){

      this.clickNum = data;
this.onPrevious();
      var nav = document.getElementsByClassName("nav1")[0] as HTMLInputElement;
      nav.style.display= 'block';
        this.isDaily = false;
         // var table1 = document.getElementsByClassName("table1")[0] as HTMLInputElement;
         console.log("enter the getClickListEvent");
      //    console.log(table1);
      // table1.style.display = "block";

    }
    getResEvent(data:any){
      this.seletResOrFav = data;
      var res = document.getElementsByClassName("result")[0] as HTMLInputElement;
      var fav = document.getElementsByClassName("favorite")[0] as HTMLInputElement;
      if (this.seletResOrFav ==="") {
           res.style.display = "none";
             this.isDaily = true;
              // var table1 = document.getElementsByClassName("table1")[0] as HTMLInputElement;
      // table1.style.display = "block";
      }
      if (this.seletResOrFav === "clickRes") {
        if (this.table === true) {
          this.isDaily = false;

          res.style.display = "block";
        fav.style.display = "none";
         this.isFav = false;
         this.isEmpty = false;
        }
        else {
          res.style.display = "block";
        fav.style.display = "none";
         this.isFav = false;
         this.isEmpty = false;
          this.isDaily = true;
        }



      }
      else if (this.seletResOrFav === "clickFav") {
          res.style.display = "none";
          if(localStorage.length === 0) {
            this.isEmpty = true;


          }
        fav.style.display = "block";
        this.isFav = true;
          this.isDaily = false;
      //      var table1 = document.getElementsByClassName("table1")[0] as HTMLInputElement;
      // table1.style.display = "block";

      }
    }
    getClearEvent(data:any) {
      this.selectClearOrReset = data;
      this.counter = 0;
      var nav = document.getElementsByClassName("nav1")[0] as HTMLInputElement;

      var res = document.getElementsByClassName("result")[0] as HTMLInputElement;
      var fav = document.getElementsByClassName("favorite")[0] as HTMLInputElement;
      if(this.selectClearOrReset === 0) {

  this.isDaily = false;

      }
      else if(this.selectClearOrReset == 1) {

      nav.style.display= 'block';
         res.style.display = "block";
        fav.style.display = "none";
      this.data = null;
  this.clickNum= null;
  this.data2 = null;
  this.day = null;
  this.isday = false;
  this.loc = null;
  this.seletResOrFav = "";
  this.selectClearOrReset = 0;
   this.isFav = false;
   this.isEmpty = false;
   this.isDaily = false;

      }else if (this.selectClearOrReset === 2) {

  this.isDaily = false;

      }

    }
    getRebuildEvent(data:any) {
      this.onPrevious();
      this.data = null;
      this.data2 = null;
      // var table1 = document.getElementsByClassName("table1")[0] as HTMLInputElement;
      // table1.style.display = "none";
      this.data = data.data;
      this.clickNum= 0;
      this.isDaily = true;
       console.log(this.data);
      var ipCity = data.city;
      var ipState = data.state;
       var forecast = {city: ipCity, state: ipState};
       var iplat = data.lat;
       var iplng = data.lng;
       var favloc = [iplat, iplng];
        this.loc = favloc;
       console.log(favloc);
       this.data2 = forecast;
        var nav = document.getElementsByClassName("nav1")[0] as HTMLInputElement;

        var res = document.getElementsByClassName("result")[0] as HTMLInputElement;
      var fav = document.getElementsByClassName("favorite")[0] as HTMLInputElement;
    res.style.display = "block";
        fav.style.display = "none";
        nav.style.display="block";
         this.isFav = false;



    }
    getRemoveEnd(data:any) {
      if(data === 9) {
        this.table = true;
        this.isEmpty = true;


      }

    }
    getClickDetailEvent(data:any) {

      if (data === "secondary") {
        this.day = 0;
      console.log(this.day);
      this.isday = true;
      this.clickNum=3;
      var nav = document.getElementsByClassName("nav1")[0] as HTMLInputElement;
      nav.style.display= 'none';
      this.isDaily = false;
      }
    }
    getClickEvent(data:any) {
      this.isRes = data;

    }
    getClickButtonEvent2(data:any) {
      this.isRes = data;
    }
}
