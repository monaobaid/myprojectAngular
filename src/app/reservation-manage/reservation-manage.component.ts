import { Component, OnInit ,NgModule } from '@angular/core';
import { MenuService } from '../services/menu.service';
import {Ireservation } from '../Iresevation';


@Component({
  selector: 'app-reservation-manage',
  templateUrl: './reservation-manage.component.html',
  styleUrls: ['./reservation-manage.component.css']
})
export class ReservationManageComponent implements OnInit {
  datares=[]
  delres=[]
  updatedata :Ireservation
  email:string
  constructor(private reservation:MenuService) { }

  ngOnInit() {
  }
manage()
{  
  this.reservation.manageReservations(this.email).subscribe(data=>{
    this.datares=data
  })
  
}
delete(data:Ireservation): void {
  this.delres = this.delres.filter(h => h !== data);
  this.reservation.delReservation(data.id).subscribe();
  alert("تم الحذف")
}
update(data:Ireservation): void {
  if (data) {
    this.reservation.updateReservation(data).subscribe(d =>this.updatedata=d)
  }
}
}


