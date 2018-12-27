import { Time } from '@angular/common';

export interface Ireservation{
 
    name: string,
    email: string,
    fristDate: Date,
    numOfday:number,
    fristTime: Time,
    numOfhour: number,
    typeOfreservation: string,
    hospitality:boolean,
    numOfpeoples: number
  }
