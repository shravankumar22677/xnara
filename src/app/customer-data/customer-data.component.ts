import { Component } from '@angular/core';
import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent {
  public customerData:any;
  constructor(private cutomerServive:CustomerServiceService){}

  ngOnInit():void{
   this.getCustomerData();
  }

  getCustomerData(){
    this.cutomerServive.getCustomerData().subscribe(data =>{
     this.customerData=data;
     console.log(this.customerData)
    },
    (error)=>{
      console.log(error);
    }
    )
  }

}
