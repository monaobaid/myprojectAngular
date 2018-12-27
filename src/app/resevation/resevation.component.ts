import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuService } from '../services/menu.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resevation',
  templateUrl: './resevation.component.html',
  styleUrls: ['./resevation.component.css']
})
export class ResevationComponent implements OnInit {
  addObj ={}
  datares=[]
  addForm=new FormGroup({
    name:new FormControl(null,Validators.required),
    email:new FormControl(null,Validators.required),
    fristDate:new FormControl(null,Validators.required),
    numOfday:new FormControl(null,Validators.required),
    fristTime:new FormControl(null,Validators.required),
    numOfhour:new FormControl(null,Validators.required),
    typeOfreservation:new FormControl(null,Validators.required),
    hospitality:new FormControl(null,Validators.required),
    numOfpeoples:new FormControl(null,Validators.required)
   } )
  constructor(private reservation:MenuService) { }

  ngOnInit() {
    this.reservation.getReservation().subscribe(data=>{
      console.log(data ,"data") 
      this.datares=data
    })
  }

//--- add new reservation ----
addServation (){
    let newRes ={
    name:this.addForm.controls.name.value,
    email:this.addForm.controls.email.value,
    fristDate:this.addForm.controls.fristDate.value,
    numOfday:this.addForm.controls.numOfday.value,
    fristTime:this.addForm.controls.fristTime.value,
    numOfhour:this.addForm.controls.numOfhour.value,
    typeOfreservation:this.addForm.controls.typeOfreservation.value,
    hospitality:this.addForm.controls.hospitalityng.value,
    numOfpeoples:this.addForm.controls.numOfpeoples.value
    }
    this.reservation.addNew(newRes).subscribe((data)=>this.addObj=data,error=>console.log(error))
  }

  // ------ View Reservation-----
  view()
  {
  
  }
}

