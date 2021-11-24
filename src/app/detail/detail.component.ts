import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';





@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input() values:any;
@Input() values2:number;
@Input() values3:any;
@Input() values4:any;
@Output() clickListEvent = new EventEmitter<any>();
lat:number;
lng :number;
currentTime: any = [];
weatherCode:any = [];
tempHigh : any = [];
tempLow:any = [];
windSpeed: any = [];

data:any = [];
status:any[] =[];
img:any[] = [];
sunriseTime:any[] = [];
sunsetTime:any[] = [];
visibility:any[] = [];
hum:any[] = [];
cloudcover:any[] = [];
temapp:any[] = [];
sunset:any[] = [];
sunris:any[] = [];
info: any;
  constructor() { }

  ngOnInit(): void {


console.log(this.values2);

let alldata = this.values;




    for (let i = 0; i < 15; ++i) {
      this.currentTime[i] = alldata['data']['timelines'][2]['intervals'][i]['startTime'];

      this.weatherCode[i] = alldata['data']['timelines'][2]['intervals'][i]['values']['weatherCode'];

      this.tempHigh[i] = alldata['data']['timelines'][2]['intervals'][i]['values']['temperatureMax'];
      this.tempLow[i] = alldata['data']['timelines'][2]['intervals'][i]['values']['temperatureMin'];
      this.windSpeed[i] = alldata['data']['timelines'][2]['intervals'][i]['values']['windSpeed'];
  this.sunriseTime[i] = alldata['data']['timelines'][2]['intervals'][i]['values']['sunriseTime'];
        this.sunsetTime[i] = alldata['data']['timelines'][2]['intervals'][i]['values']['sunsetTime'];
 this.visibility[i] = alldata['data']['timelines'][2]['intervals'][i]['values']['visibility'];
       this.hum[i] = alldata['data']['timelines'][2]['intervals'][i]['values']['humidity'];
       this.cloudcover[i] = alldata['data']['timelines'][2]['intervals'][i]['values']['cloudCover'];
this.temapp[i] = alldata['data']['timelines'][2]['intervals'][i]['values']['temperatureApparent'];
    }
for (let i = 0; i < 15; ++i) {
  this.data[i] = this.fun4(this.currentTime[i]);
}
for (let i = 0; i < 15; ++i) {

  this.status[i] = this.fun5(this.weatherCode[i],1);

  this.img[i] = this.fun6(this.weatherCode[i], 1);

}
for (let i = 0; i < 15; ++i) {
  this.sunris[i] = this.fun8(this.sunriseTime[i]);
  this.sunset[i] = this.fun9(this.sunsetTime[i]);
}
 this.lat = parseFloat(this.values3[0]);
    this.lng = parseFloat(this.values3[1]);
    this.info = this.getinfo();
    console.log(this.info);
  }
        fun4(str:any) {
        var weekday = str.substring(0, 10);
        var str_year = str.substring(0,4);
        var str_date = str.substring(8, 10);
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
        var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var date = new Date(Date.parse(weekday.replace(/-/g, "/")));
        var day = week[date.getDay()];
        var whichmonth =month[date.getMonth()];
        var weekDay_data_month_year = day+","+str_date+" "+whichmonth+" "+str_year;
        return weekDay_data_month_year;
    }

      fun5(weatherCode:any, day:any) {

      let src: any = "";
      let weatherStatus: any ="";

      if (weatherCode === 1000) {

                  if (day === 1) {
                     src = "../../assets/img/clear_day.svg";

                  }
                  else {
                      src = "../../assets/img/clear_night.svg";
                  }

                 weatherStatus='Clear'
              }
              else if (weatherCode === 1100) {
                  if (day === 1) {
                      src = "../../assets/img/mostly_clear_day.svg";
                  }
                  else{
                      src = "../../assets/img/mostly_clear_night.svg";
                  }
                  weatherStatus='Mostly Clear';

              }
              else if (weatherCode === 1101) {
                  if (day === 1) {
                      src = "../../assets/img/partly_cloudy_day.svg";
                  }
                  else{
                    src = "../../assets/img/partly_cloudy_night.svg";
                  }
                  weatherStatus='Partly Clear';
              }

              else if (weatherCode === 1001) {

                      src = "../../assets/img/cloudy.svg";
                       weatherStatus=' Cloudy';

              }
                else if (weatherCode === 1102) {

                    src = "../../assets/img/mostly_cloudy.svg";
                       weatherStatus='Mostly Cloudy';

              }


               else if (weatherCode === 2000) {

                      src = "../../assets/img/fog.svg";
                       weatherStatus='Fog';
              }
               else if (weatherCode === 2100) {

                      src = "../../assets/img/fog_light.svg";
                      weatherStatus='Light Fog';
              }
                else if (weatherCode === 8000) {

                      src = "../../assets/img/tstorm.svg";
                      weatherStatus='ThunderStorm';

              }
                 else if (weatherCode === 5001) {

                      src = "../../assets/img/flurries.svg";
                        weatherStatus= 'Flurries';
              }
                 else if (weatherCode === 5100) {

                      src = "../../assets/img/snow_light.svg";
                      weatherStatus='Light Snow';

              }
                   else if (weatherCode === 5000) {

                      src = "../../assets/img/snow.svg";
                      weatherStatus='Snow';

              }
                   else if (weatherCode === 5101) {

                      src = "../../assets/img/rain_heavy.svg";
                      weatherStatus='Heavy Snow';

              }
                   else if (weatherCode === 7102) {

                      src = "../../assets/img/ice_pellets_light.svg";
                      weatherStatus='Light Ice Pellets';

              }
                    else if (weatherCode === 7000) {

                     src = "../../assets/img/ice_pellets.svg";
                      weatherStatus='Ice Pellets';

              }
                   else if (weatherCode === 7101) {

                     src = "../../assets/img/ice_pellets_heavy.svg";
                      weatherStatus='Heavy Ice Pellets';

              }
                   else if (weatherCode === 4000) {

                      src = "../../assets/img/drizzle.svg";
                      weatherStatus='Drizzle';

              }
                   else if (weatherCode === 6000) {

                     src = "../../assets/img/freezing_drizzle.svg";
                      weatherStatus='Freezing Drizzle';

              }
                   else if (weatherCode === 6200) {

                      src = "../../assets/img/freezing_rain_light.svg";
                      weatherStatus='Light Freezing Rain';

              }
                   else if (weatherCode === 6001) {

                      src = "../../assets/img/freezing_rain.svg";
                      weatherStatus='Freezing Rain';

              }
                   else if (weatherCode === 6201) {

                      src = "../../assets/img/freezing_rain_heavy.svg";
                      weatherStatus='Heavy Freezing Rain';

              }
                   else if (weatherCode === 4200) {

                      src = "../../assets/img/rain_light.svg";
                      weatherStatus='Light Rain';

              }
                   else if (weatherCode === 4001) {

                      src = "../../assets/img/rain.svg";
                       weatherStatus='Rain';

              }
                   else if (weatherCode === 4201) {

                      src = "../../assets/img/rain_heavy.svg";
                       weatherStatus='Heavy Rain';

              }   else if (weatherCode === 3000) {
                       src = "../../assets/img/light_wind.svg";
                       weatherStatus='Light Wind';

      }
                         else if (weatherCode === 3001) {
                      src = "../../assets/img/wind.svg";
                       weatherStatus='Wind';

      }
                         else if (weatherCode === 3002) {
                      src = "../../assets/img/strong_wind.svg";
                       weatherStatus="Strong Wind";

      }

      return weatherStatus;
    }
 fun6(weatherCode:any, day:any) {

      let src: any = "";
      let weatherStatus: any ="";
      // let status1:any[] = [];
      if (weatherCode === 1000) {

                  if (day === 1) {
                     src = "../../assets/img/clear_day.svg";

                  }
                  else {
                      src = "../../assets/img/clear_night.svg";
                  }

                 weatherStatus='Clear'
              }
              else if (weatherCode === 1100) {
                  if (day === 1) {
                      src = "../../assets/img/mostly_clear_day.svg";
                  }
                  else{
                      src = "../../assets/img/mostly_clear_night.svg";
                  }
                  weatherStatus='Mostly Clear';

              }
              else if (weatherCode === 1101) {
                  if (day === 1) {
                      src = "../../assets/img/partly_cloudy_day.svg";
                  }
                  else{
                    src = "../../assets/img/partly_cloudy_night.svg";
                  }
                  weatherStatus='Partly Clear';
              }
              else if (weatherCode === 1102) {

                      src = "../../assets/img/mostly_cloudy.svg";
                       weatherStatus='Mostly Cloudy';

              }
              else if (weatherCode === 1001) {

                      src = "../../assets/img/cloudy.svg";
                       weatherStatus=' Cloudy';

              }
               else if (weatherCode === 2000) {

                      src = "../../assets/img/fog.svg";
                       weatherStatus='Fog';
              }
               else if (weatherCode === 2100) {

                      src = "../../assets/img/fog_light.svg";
                      weatherStatus='Light Fog';
              }
                else if (weatherCode === 8000) {

                      src = "../../assets/img/tstorm.svg";
                      weatherStatus='ThunderStorm';

              }
                 else if (weatherCode === 5001) {

                      src = "../../assets/img/flurries.svg";
                        weatherStatus= 'Flurries';
              }
                 else if (weatherCode === 5100) {

                      src = "../../assets/img/snow_light.svg";
                      weatherStatus='Light Snow';

              }
                   else if (weatherCode === 5000) {

                      src = "../../assets/img/snow.svg";
                      weatherStatus='Snow';

              }
                   else if (weatherCode === 5101) {

                      src = "../../assets/img/rain_heavy.svg";
                      weatherStatus='Heavy Snow';

              }
                   else if (weatherCode === 7102) {

                      src = "../../assets/img/ice_pellets_light.svg";
                      weatherStatus='Light Ice Pellets';

              }
                    else if (weatherCode === 7000) {

                     src = "../../assets/img/ice_pellets.svg";
                      weatherStatus='Ice Pellets';

              }
                   else if (weatherCode === 7101) {

                     src = "../../assets/img/ice_pellets_heavy.svg";
                      weatherStatus='Heavy Ice Pellets';

              }
                   else if (weatherCode === 4000) {

                      src = "../../assets/img/drizzle.svg";
                      weatherStatus='Drizzle';

              }
                   else if (weatherCode === 6000) {

                     src = "../../assets/img/freezing_drizzle.svg";
                      weatherStatus='Freezing Drizzle';

              }
                   else if (weatherCode === 6200) {

                      src = "../../assets/img/freezing_rain_light.svg";
                      weatherStatus='Light Freezing Rain';

              }
                   else if (weatherCode === 6001) {

                      src = "../../assets/img/freezing_rain.svg";
                      weatherStatus='Freezing Rain';

              }
                   else if (weatherCode === 6201) {

                      src = "../../assets/img/freezing_rain_heavy.svg";
                      weatherStatus='Heavy Freezing Rain';

              }
                   else if (weatherCode === 4200) {

                      src = "../../assets/img/rain_light.svg";
                      weatherStatus='Light Rain';

              }
                   else if (weatherCode === 4001) {

                      src = "../../assets/img/rain.svg";
                       weatherStatus='Rain';

              }
                   else if (weatherCode === 4201) {

                      src = "../../assets/img/rain_heavy.svg";
                       weatherStatus='Heavy Rain';

              }   else if (weatherCode === 3000) {
                       src = "../../assets/img/light_wind.svg";
                       weatherStatus='Light Wind';

      }
                         else if (weatherCode === 3001) {
                      src = "../../assets/img/wind.svg";
                       weatherStatus='Wind';

      }
                         else if (weatherCode === 3002) {
                      src = "../../assets/img/strong_wind.svg";
                       weatherStatus="Strong Wind";

      }
                         else{

      }

      return src;
    }
  fun8(sunrise:any) {
        let rise :any = sunrise.substring(11, 19);




        return rise;


}
  fun9(sunset:any ) {

        let set:any = sunset.substring(11, 19);

        return set;


}

getinfo(){
    console.log("into ");
   let info = "The temperature in " + this.values4.city + ", "+this.values4.state+" on "+this.data[this.values2]+ " is " + this.temapp[this.values2]+ "°F. The weather conditions \n" +
     "are "+ this.status[this.values2]+"&hashtags=CSCI571WeatherSearch.";
  return info;
}
backToTable(){
    this.clickListEvent.emit(0);
}


}
