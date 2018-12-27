import { Component, OnInit ,NgModule } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-reservation-manage',
  templateUrl: './reservation-manage.component.html',
  styleUrls: ['./reservation-manage.component.css']
})
export class ReservationManageComponent implements OnInit {
  datares=[]
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
}
