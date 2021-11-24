import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Output() clickRemoveEnd = new EventEmitter<any>();
  @Output() clickRebuildEvent = new EventEmitter<any>();
  @Output() clickRes = new EventEmitter<any>();
public favoriteData: any[] = [];
public favoriteCity:any[]  = [];
public favoriteState:any[] = [];
public favoritelat:any[] = [];
public favoritelng:any[] = [];
public favoriteJson:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.generateForm();
    console.log(localStorage.length);
  }
generateForm() {
    if (localStorage.length!=0) {
      for (let i = 0; i < localStorage.length; ++i) {

        this.favoriteData[i] =JSON.parse(localStorage.getItem(localStorage.key(i) as string) as string) ;
        console.log(this.favoriteData[i]);
      }
      for (let i = 0; i < localStorage.length; ++i) {

        this.favoriteCity[i] = this.favoriteData[i].city;
        console.log(this.favoriteCity[i]);
        this.favoriteState[i] = this.favoriteData[i].state;
        this.favoritelat[i] = this.favoriteData[i].lat;
        this.favoritelng[i] = this.favoriteData[i].lng;
        this.favoriteJson[i] = this.favoriteData[i].data;
        console.log(this.favoriteJson[i]);
      }
    }
}
remove(i:number) {

    localStorage.removeItem(this.favoriteCity[i]);
    this.favoriteData.splice(i,1);
    this.favoriteCity.splice(i,1);
    this.favoriteState.splice(i,1);
    this.favoriteJson.splice(i, 1);
    if (localStorage.length === 0) {
            this.clickRemoveEnd.emit(9);

    }

}
rebuild(i:number){
    this.clickRebuildEvent.emit(this.favoriteData[i]);
    this.clickRes.emit(true);
}

}
