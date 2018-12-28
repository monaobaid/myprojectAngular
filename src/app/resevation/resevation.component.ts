import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ireservation } from '../Iresevation';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-resevation',
  templateUrl: './resevation.component.html',
  styleUrls: ['./resevation.component.css']
})
export class ResevationComponent implements OnInit {
  addForm :FormGroup
  newRes : Ireservation
  addObj ={}
  datares =[]
  
  dates :Ireservation


  submitted = false;
  isdate=false
  fristDate :string
    numOfday:number 

  
  constructor(private reservation:MenuService) { }

  ngOnInit() {
    this.addForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      fristDate:new FormControl("",Validators.required),
      numOfday:new FormControl(null,Validators.required),
      fristTime:new FormControl(null,Validators.required),
      numOfhour:new FormControl(null,Validators.required),
      typeOfreservation:new FormControl(null,Validators.required),
      hospitality:new FormControl(null,Validators.required),
      numOfpeoples:new FormControl(null,Validators.required)
  
     } )
    this.reservation.getReservation().subscribe(data=>{
      console.log(data ,"data") 
      this.datares=data

    })
  }

//--- add new reservation ----

        
  

  // ------ View Reserv// convenience getter for easy access to form fields
    get f() { return this.addForm.controls; }

    onSubmit() {
      this.submitted = true;

      //   // stop here if form is invalid
      // //   {
      // //  return
      // //  }
      // //-------- check the reservation date ----------
        
      //   this.reservation.dateReservation(this.fristDate).subscribe(data=>{
      //     this.dates=data})
    
      //   if( this.dates.fristDate !==this.fristDate )  
      //    { 
         //if(!this.isdate)
        if (!this.addForm.invalid)
        {
        this.newRes ={
          name:this.addForm.controls.name.value,
          email:this.addForm.controls.email.value,
          fristDate:this.addForm.controls.fristDate.value,
          numOfday:this.addForm.controls.numOfday.value,
          fristTime:this.addForm.controls.fristTime.value,
          numOfhour:this.addForm.controls.numOfhour.value,
          typeOfreservation:this.addForm.controls.typeOfreservation.value,
          hospitality:true,
          numOfpeoples:this.addForm.controls.numOfpeoples.value
          } as Ireservation
          this.reservation.addNew(this.newRes).subscribe(data=>this.addObj=data )//,error=>console.log(error))
          console.log(this.addObj)
        alert('تم الحفظ')
      } 
      // else {
      // alert('  نأسف اليوم محجوز ' )
      // console.log(this.dates)
      // }
      //    //json}//
      }
      

         
        
  }

