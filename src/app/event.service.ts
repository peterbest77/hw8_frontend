import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

 subject = new Subject < any > ();
  constructor() { }
   publish(value: any,) {
    if (value !== undefined) {
      // 将新的事件放入next队列中
      this.subject.next(value);
    }

    // 表示当前事件结束
    this.subject.complete();
  }

  async subcribe(handler: {
   next: (value:any)=>any


  }) {
     this.subject.subscribe(handler);


  }

}
