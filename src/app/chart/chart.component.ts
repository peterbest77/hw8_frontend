import {Component, Input, OnInit} from '@angular/core';
import {EventService} from "../event.service";

import * as Highcharts from 'highcharts';



declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let windbarb = require('highcharts/modules/windbarb');
Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
windbarb(Highcharts);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})







export class ChartComponent implements OnInit {
@Input() values: any;









  async ngOnInit(){






       this.generateChart();





  }
// generateChart2(){
//      const  chartData = this.data as any;
//
// class Meteogram {
//
//   precipitations:any;
//   precipitationsError:any; // Only for some data sets
//   winds:any;
//   temperatures:any;
//   pressures :any;
//   json:any;
//   container:any;
//   constructor(json:any, container:any) {
//   // Parallel arrays for the chart data, these are populated as the JSON file
//   // is loaded
//   this.precipitations = [];
//   this.precipitationsError = []; // Only for some data sets
//   this.winds = [];
//   this.temperatures = [];
//   this.pressures = [];
//   this.json = json;
//   this.container = container;
//   this.parseYrData();
// }
//
// getChartOptions ():any {
//   return {
//     chart: {
//       renderTo: this.container,
//       marginBottom: 70,
//       marginRight: 40,
//       marginTop: 50,
//       plotBorderWidth: 1,
//       height: 400,
//       alignTicks: false,
//       scrollablePlotArea: {
//         minWidth: 720
//       }
//     },
//
//     defs: {
//       patterns: [{
//         id: 'precipitation-error',
//         path: {
//           d: [
//             'M', 3.3, 0, 'L', -6.7, 10,
//             'M', 6.7, 0, 'L', -3.3, 10,
//             'M', 10, 0, 'L', 0, 10,
//             'M', 13.3, 0, 'L', 3.3, 10,
//             'M', 16.7, 0, 'L', 6.7, 10
//           ].join(' '),
//           stroke: '#68CFE8',
//           strokeWidth: 1
//         }
//       }]
//     },
//
//     title: {
//       text: 'Hourly Weather (For Next 5 Days)',
//       align: 'center',
//       style: {
//         whiteSpace: 'nowrap',
//         textOverflow: 'ellipsis'
//       }
//     },
//
//
//
//     tooltip: {
//       shared: true,
//       useHTML: true,
//       headerFormat:
//         '<small>{point.x:%A, %b %e, %H:%M:%S} </small><br>'
//
//     },
//
//     xAxis: [{ // Bottom X axis
//       type: 'datetime',
//       tickInterval: 4 * 36e5, // two hours
//       minorTickInterval: 36e5, // one hour
//       tickLength: 0,
//       gridLineWidth: 1,
//       gridLineColor: 'rgba(128, 128, 128, 0.1)',
//       startOnTick: false,
//       endOnTick: false,
//       minPadding: 0,
//       maxPadding: 0,
//       offset: 30,
//       showLastLabel: true,
//       labels: {
//         format: '{value:%H}'
//       },
//       crosshair: true
//     }, { // Top X axis
//       linkedTo: 0,
//       type: 'datetime',
//       tickInterval: 24 * 3600 * 1000,
//       labels: {
//         format: '{value:<span style="font-size: 12px; font-weight: bold">%a</span> %b %e}',
//         align: 'left',
//         x: 3,
//         y: -5
//       },
//       opposite: true,
//       tickLength: 20,
//       gridLineWidth: 1
//     }],
//
//     yAxis: [{ // temperature axis
//       title: {
//         text: null
//       },
//       labels: {
//         format: '{value}°',
//         style: {
//           fontSize: '10px'
//         },
//         x: -3
//       },
//       plotLines: [{ // zero plane
//         value: 0,
//         color: '#BBBBBB',
//         width: 1,
//         zIndex: 2
//       }],
//       maxPadding: 0.3,
//       minRange: 8,
//       tickInterval: 1,
//       gridLineColor: 'rgba(128, 128, 128, 0.1)'
//
//     }, { // precipitation axis
//       title: {
//         text: null
//       },
//       labels: {
//         enabled: false
//       },
//       gridLineWidth: 0,
//       tickLength: 0,
//       minRange: 10,
//       min: 0
//
//     }, { // Air pressure
//       allowDecimals: false,
//       title: { // Title on top of axis
//         text: 'inHg',
//         offset: 0,
//         align: 'high',
//         rotation: 0,
//         style: {
//           fontSize: '10px',
//           color: '#fdb84b'
//         },
//         textAlign: 'left',
//         x: 3
//       },
//       labels: {
//         style: {
//           fontSize: '8px',
//           color: '#fdb84b'
//         },
//         y: 2,
//         x: 3
//       },
//       gridLineWidth: 0,
//       opposite: true,
//       showLastLabel: false
//     }],
//
//     legend: {
//       enabled: false
//     },
//
//     plotOptions: {
//       series: {
//         pointPlacement: 'between'
//       }
//     },
//
//
//     series: [{
//       name: 'Temperature',
//       data: this.temperatures,
//       type: 'spline',
//       marker: {
//         enabled: false,
//         states: {
//           hover: {
//             enabled: true
//           }
//         }
//       },
//       tooltip: {
//         pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
//           '{series.name}: <b>{point.y}°F</b><br/>'
//       },
//       zIndex: 1,
//       color: '#FF3333',
//       negativeColor: '#48AFE8'
//     }, {
//       name: 'Precipitation',
//       data: this.precipitationsError,
//       type: 'column',
//       color: 'url(#precipitation-error)',
//       yAxis: 1,
//       groupPadding: 0,
//       pointPadding: 0,
//       tooltip: {
//         valueSuffix: ' %',
//         pointFormat: '<span style="color:{point.color}">\u25CF</span> ' +
//           '{series.name}: <b>{point.minvalue} % - {point.maxvalue} %</b><br/>'
//       },
//       grouping: false,
//       dataLabels: {
//         enabled: false,
//         filter: {
//           operator: '>',
//           property: 'maxValue',
//           value: 0
//         },
//         style: {
//           fontSize: '8px',
//           color: 'gray'
//         }
//       }
//     }, {
//       name: 'Humidity',
//       data: this.precipitations,
//       type: 'column',
//       color: '#68CFE8',
//       yAxis: 0,
//       groupPadding: 0,
//       pointPadding: 0,
//       grouping: false,
//       dataLabels: {
//         enabled: true,
//         filter: {
//           operator: '>',
//           property: 'y',
//           value: 0
//         },
//         style: {
//           fontSize: '8px',
//           color: 'gray'
//         }
//       },
//       tooltip: {
//         valueSuffix: ' %'
//       }
//     }, {
//       name: 'Air pressure',
//       color: '#fdb84b',
//       data: this.pressures,
//       marker: {
//         enabled: false
//       },
//       shadow: false,
//       tooltip: {
//         valueSuffix: ' inHg'
//       },
//       dashStyle: 'shortdot',
//       yAxis: 2
//     }, {
//       name: 'Wind',
//       type: 'windbarb',
//       id: 'windbarbs',
//
//       color: '#bb2429',
//       lineWidth: 1.5,
//       data: this.winds,
//       vectorLength: 18,
//       yOffset: -15,
//       tooltip: {
//         valueSuffix: ' mph'
//       }
//     }]
//   };
// };
//
//
//   createChart () {
//     Highcharts.chart(this.container, this.getChartOptions());
//
//   }
//
//
//
//   parseYrData  () {
//
//   let pointStart:any;
//
//
// console.log(this.json);
//   // Loop over hourly (or 6-hourly) forecasts
//   this.json['data']['timelines'][1]['intervals'].forEach((node:any, i:any) => {
//
//     const x = Date.parse(node['startTime']),
//       nextHours =node['values']['humidity'],
//       to = x + 36e5;
//
//     if (to > pointStart + 144 * 36e5) {
//       return;
//     }
//
//     // Populate the parallel arrays
//
//
//     this.temperatures.push({
//       x,
//       y: node['values']['temperature'],
//       // custom options used in the tooltip formatter
//       to,
//
//     });
//
//     this.precipitations.push({
//       x,
//       y: nextHours
//     });
//
//     if (i % 2 === 0) {
//       this.winds.push({
//         x,
//         value:  node['values']['windSpeed'],
//         direction: node['values']['windDirection']
//       });
//     }
//
//     this.pressures.push({
//       x,
//       y: node['values']['pressureSeaLevel']
//     });
//
//     if (i === 0) {
//       pointStart = (x + to) / 2;
//     }
//   });
//
//   // Create the chart when the data is loaded
//   this.createChart();
// };
//   }
// new Meteogram(chartData, "container3");
//
// /**
//  * Mapping of the symbol code in yr.no's API to the icons in their public
//  * GitHub repo, as well as the text used in the tooltip.
//  *
//  * https://api.met.no/weatherapi/weathericon/2.0/documentation
//  */
//
//
//
//
// /**
//  * Draw blocks around wind arrows, below the plot area
//  */
//
//
// /**
//  * Build and return the Highcharts options structure
//  */
//
//
//
// /**
//  * Post-process the chart from the callback function, the second argument
//  * Highcharts.Chart.
//  */
//
//
// /**
//  * Create the chart. This function is called async when the data file is loaded
//  * and parsed.
//  */
//
//
// /**
//  * Handle the data. This part of the code is not Highcharts specific, but deals
//  * with yr.no's specific data format
//  */
//
// // End of the Meteogram protype
//
//
// // On DOM ready...
//
//  // @ts-ignore
//
// // Set the hash to the yr.no URL we want to parse
//
//
//
//     }






  generateChart(){

    const  chartData = this.values as any;

    console.log(chartData);

    console.log(chartData['data']['timelines']);
   var alldata = chartData;
    var arr = new Array(15);
         for (var j =0; j < arr.length; j++) {
             arr[j] = new Array(3);
         }
         for (var i = 0; i < 15; ++i) {
             var currentTime = alldata['data']['timelines'][2]['intervals'][i]['startTime'];
             var weatherCode = alldata['data']['timelines'][2]['intervals'][i]['values']['weatherCode'];
             var tempHigh = alldata['data']['timelines'][2]['intervals'][i]['values']['temperatureMax'];
             var tempLow = alldata['data']['timelines'][2]['intervals'][i]['values']['temperatureMin'];
            currentTime = currentTime.substring(0,10);
            var date = new Date(currentTime);
            var time = date.getTime();
            arr[i][0] = time;
            arr[i][1] = tempLow;
            arr[i][2] = tempHigh;

         }
         console.log(arr);
          var nb = arr;

          console.log(arr);


var chartOptions: any  = {
           chart: {
         type: 'arearange',
        zoomType: 'x',
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1
        }
      },
         title: {
        text: 'Temperature Ranges(Min,Max)'
      },

      xAxis: {
        type: 'datetime',
        accessibility: {
          rangeDescription: 'Range: Sep 30 2021 to Oct 12 2021.'
        }
      },
           yAxis: {
        title: {
          text: null
        }
      },
           tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: '°F',
        xDateFormat: '%A, %b %e'
      },
           legend: {
        enabled: false
      },
           series: [{
        name: 'Temperatures',
        data: nb,
          marker:{
            fillColor:"#4192ff"
          },
          lineColor: '#ffa40d',
          color: {
  linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
  stops: [
      [0, '#ed700f'],
      [0.5, '#d6bf9b'],
      [1, '#a5d6f8']
  ]
},
          opacity:0.6
      }]

   };



    Highcharts.chart('container1', chartOptions);
  }



}
