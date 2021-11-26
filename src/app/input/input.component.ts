import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import {Observable} from 'rxjs';
import {map, startWith} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

import {EventService} from "../event.service";






@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})


 export class InputComponent implements OnInit {
  @ViewChild('f',{static:false}) signupForm: NgForm;
  @Output()childEvent = new EventEmitter<any>();
  @Output() childEvent2 = new EventEmitter<any>();
  @Output() clickEvent = new EventEmitter<any>();
  @Output() clickLoc = new EventEmitter<any>();
  @Output() clickRes = new EventEmitter<any>();
  @Output() clickClear = new EventEmitter<any>();
  @Output() clickButtonEvent2 = new EventEmitter<any>();
  city:string;
  street:string;
  check:boolean;
  state:string;
  bar:boolean = false;
public data:any;
@Input() clickButton: boolean = false;


  constructor(public http:HttpClient,private  event1: EventService) {


  }



  someThingChange(data:any) {
    this.event1.publish(data);
  }
  sendText(data:any) {
    this.event1.subject.next(data);
  }

  public  event2 = false;
  public  event = false;

  public auto = "";
  control = new FormControl();

  streets: string[] = [];
  filteredStreets: Observable<string[]>;
  public val = "";
  public val1 ="";
  async ngOnInit(){

this.city = "";
     this.street="";

    this.check=false;
    this.state= "";
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))

    );
  }
 _filter(value: string): string[] {
     this.val = value;
     console.log(this.val);
     this.function(value);
    const filterValue = this._normalizeValue(value);

    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));

  }
 async function (val: string) {

      const get =  {name : val};

var json = await this.http.get('https://csci571hw8-001.wl.r.appspot.com/sendCity', {params: get} ).toPromise() as any;
//     var json = await this.http.get('http://localhost:8080/sendCity', {params: get} ).toPromise() as any;
    console.log(json);
    if (val != ""){
      console.log(this.val);
      var len = json['predictions'].length;
      console.log(len);

      statename =   json['status'];
      if (len < 4  || statename === 'ZERO_RESULTS'){
        console.log("your input is error");
 var statename = json['predictions'][0]['terms'][1]['value'];
    this.val1 = statename;
      }
      else {
        try {
        var str1 = json['predictions'][0]['terms'][0]['value'];
    var str2 = json['predictions'][1]['terms'][0]['value'];
    var str3 = json['predictions'][2]['terms'][0]['value'];
    var str4 = json['predictions'][3]['terms'][0]['value'];

    var statename = json['predictions'][0]['terms'][1]['value'];
    this.val1 = statename;
    // this.state = val;
    console.log(this.val1);
    this.streets = [str1,str2,str3,str4];
      }
      catch (e) {
          throw e;

      }
      finally {

      }
      }

    }
  }

   _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');


  }

   onblur() {
    this.event = true;
      var input1 = (document.getElementsByClassName("form-control")[0] as HTMLInputElement);

    if (this.street===''&& this.event) {
      input1.style.border = "1px solid red";
    }else {
      input1.style.border = "1px solid white";
    }

   }
   onblur2() {
    this.event2 = true;
       var input1 = (document.getElementsByClassName("form-control")[1] as HTMLInputElement);

    if (this.control.invalid && this.control.touched&& this.event2) {
      input1.style.border = "1px solid red";
    }else {
      input1.style.border = "1px solid white";
    }

   }
  async onclick(){
 const get =  {name : this.val};

   var json = await this.http.get('https://csci571hw8-001.wl.r.appspot.com/sendCity', {params: get} ).toPromise() as any;
    // var json = await this.http.get('http://localhost:8080/sendCity', {params: get} ).toPromise() as any;
    var statename = json['predictions'][0]['terms'][1]['value'];
      this.val1 = statename;
      this.state = this.val1;
      console.log(this.state);
  }
  async onSubmit() {
this.clickResetEvent();
    this.bar = true;
    url = 'https://ipinfo.io/json?token=';
    var auto = await this.http.get(url).toPromise() as any;
    console.log(auto.loc);
    console.log(auto);


     var ipCity = auto.city;
     var ipState =  auto.region;
     console.log(this.city);
    console.log(this.street);
    console.log(this.state);
    console.log(this.check);


    if (this.city === "" ||this.street ==="") {
      if (this.check === false) {
        return;
      }
    }
    var loc;
    var lat;
    var lng;
    if (this.check === true) {
      loc = auto.loc;
      var strs = loc.split(',');
      lat = strs[0];
      lng = strs[1];
    }else {
       var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+this.street +"+" +this.city + "+"+this.state+"&key=";
    var  json1;
       json1 = await this.http.get(url).toPromise() as any;


       lat = json1['results'][0]['geometry']['location']['lat'];
       lng = json1['results'][0]['geometry']['location']['lng'];
          console.log(lat);
          console.log(lng);
    }
  if (this.city !== "") {
      ipCity = this.city;
    }

  if (this.state != "") {
    ipState = this.state;
    let temp:string = ipState;
    var statename = document.getElementsByClassName(temp)[0] as HTMLInputElement;
    var value1 = statename.innerHTML;
    ipState = value1;
  }
  var forecast = {city: ipCity, state: ipState};
          var url = "https://csci571hw8-001.wl.r.appspot.com/tomorrow?lat=" + lat+"&lng=" +lng;
          // var url = "http://localhost:8080/tomorrow?lat=" + lat+"&lng=" +lng;
          this.data = await this.http.get(url).toPromise() as any;

    console.log(this.data);
    if (this.data.code === 429001) {
      var alert = (document.getElementsByClassName("alert alert-danger")[0] as HTMLInputElement);
      alert.style.display = "block";
      this.bar = false;
    }else {
      this.sendData(this.data);
this.sendText(this.data);
this.sendForecast(forecast);
this.sendNav();
this.bar = false;
let locinfo = [lat, lng];
this.sendLoc(locinfo);

    }
 // this.someThingChange(this.data);

  }
  sendLoc(data:any) {
    this.clickLoc.emit(data);
  }
  sendData(data:any){
    console.log("enter sendData");
this.childEvent.emit(data);
  }
  sendForecast(data:any) {
    console.log("enter SendForecast");
    this.childEvent2.emit(data);
  }
  sendNav() {
    this.clickEvent.emit(0);
  }
  clear(){
       var input1 = (document.getElementsByClassName("form-control")[0] as HTMLInputElement);
      var input2 = (document.getElementsByClassName("form-control")[1] as HTMLInputElement);

   this.state="";
   this.city="";
   this.street="";
   this.check=false;
var  city = document.getElementsByClassName("form-control")[1] as HTMLInputElement;
 city.disabled = false;
 this.event = false;
 this.event2= false;
  if (this.street === '') {
    input1.style.border = "1px solid white";
  }else{

  }
  if (this.city === '') {
    input2.style.border = '1px solid white';
  }
   this.clickClearEvent();
    var alert = (document.getElementsByClassName("alert alert-danger")[0] as HTMLInputElement);

   alert.style.display = "none";
    var warning = document.getElementsByClassName("alert alert-warning")[0] as HTMLInputElement;
  warning.style.display="none";
  this.clickButton= true;
  }
 async autoDetect() {

     var input1 = (document.getElementsByClassName("form-control")[0] as HTMLInputElement);
      var input2 = (document.getElementsByClassName("form-control")[1] as HTMLInputElement);

console.log(this.check);
 var  city = document.getElementsByClassName("form-control")[1] as HTMLInputElement;
    if (this.check === false) {

  console.log("111111");
  console.log(this.check);
      this.city = "";
     this.street="";
     this.state = "";
      this.check = true;
 this.event = false;
 this.event2= false;

       city.disabled = true;
console.log(this.check);

      if (this.street === '') {
    input1.style.border = "1px solid white";
  }else{

  }
  if (this.city === '') {
    input2.style.border = '1px solid white';
  }else {

  }

    }else if (this.check === true){
console.log(this.check);
console.log("122222222222222");
              console.log(city.value);
        this.check = false;
      city.disabled = false;










        }


  }
  clickResEvent(){
    this.clickRes.emit("clickRes");
    this.clickButton = true;
    this.clickButtonEvent2.emit(false);



  }
  clickFavEvent(){
    this.clickRes.emit("clickFav");
    this.clickButton = false;
    this.clickButtonEvent2.emit(false);
    var len = localStorage.length;

if (len === 0) {
  console.log("no data");

} else {




}

  }


  clickClearEvent() {
    this.clickClear.emit(1);
  }
  clickResetEvent() {
    this.clickClear.emit(2);
  }
}
