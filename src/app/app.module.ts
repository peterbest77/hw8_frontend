import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {HttpClientModule} from "@angular/common/http";
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import {EventService} from "./event.service";
import { HighchartsChartModule } from 'highcharts-angular';
import { LoadingComponent } from './loading/loading.component';
import {ProgressBarModule} from "angular-progress-bar"
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from './title/title.component';
import { CharttwoComponent } from './charttwo/charttwo.component';
import { NavComponent } from './nav/nav.component';
import { DetailComponent } from './detail/detail.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AgmCoreModule} from "@agm/core";
import {MatIconModule} from "@angular/material/icon";
import { FavoriteComponent } from './favorite/favorite.component';
import { Table2Component } from './table2/table2.component';
import { AlertComponent } from './alert/alert.component';







@NgModule({
  declarations: [

    AppComponent,
    InputComponent,
    TableComponent,
    ChartComponent,
    LoadingComponent,
    TitleComponent,
    CharttwoComponent,
    NavComponent,
    DetailComponent,
    GooglemapComponent,
    FavoriteComponent,
    Table2Component,
    AlertComponent,



  ],
  imports: [
   AgmCoreModule.forRoot({
     apiKey:'AIzaSyCYBTxxl7O-Jothulmd1oe3Dcl-pnFUn2g'
   }),
    BrowserAnimationsModule,
    NgbModule,
    ProgressBarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    HighchartsChartModule,
    NgbProgressbarModule,
    MatIconModule

  ],

  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {
  canView:boolean = false;
}
