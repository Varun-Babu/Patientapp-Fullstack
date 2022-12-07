import { Component } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  name =""
  healthHistory = ""
  doctor = ""

  readValue = () =>{
    let data:any = {"name":this.name,"healthHistory":this.healthHistory,"doctor":this.doctor}
    console.log(data)
  }

}
