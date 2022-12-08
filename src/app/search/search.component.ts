import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  id=""
name=""
healthHistory=""
doctor=""

searchData:any =[]

constructor(private api:ApiService){}

  readValue = () =>
  {
    let data:any = {"id":this.id}
    console.log(data)
    this.api.searchPatient(data).subscribe(
      (response:any) => {
        console.log(response)
        if (response.length==0) {
          alert("Invalid Employee Code")
        } else {
          this.searchData=(response)
      }
      }
    )
    
  }

  deleteBtnClick= (id:any)=>{
    let data:any = {"id":id}
    this.api.deletePatient(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert("Patient deleted Successfully")
        } else {
          alert("Invalid")
        }

      }
    )

  }
}
