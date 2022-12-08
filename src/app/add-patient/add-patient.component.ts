import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  name =""
  healthHistory = ""
  doctor = ""
constructor(private api:ApiService){}
  readValue = () =>{
    let data:any = {"name":this.name,"healthHistory":this.healthHistory,"doctor":this.doctor}
    console.log(data)
    this.api.addPatient(data).subscribe(
      (response)=>{
        
      }
    )
  }

}
