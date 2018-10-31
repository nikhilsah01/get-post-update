import { Component, OnInit } from '@angular/core';
import {GetuserService} from '../../servies/getuser.service';








@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   
   public users = []
   user = {
    id: '',
    name:'',
    username:'',
    email:'',
    phone:''


   }

   isEdit:boolean = false;

  constructor( public GetuserServicenew:GetuserService ) { 
 

    
  }

  ngOnInit() {
     
 
    this.GetuserServicenew.userData().subscribe(
      data => this.users = data
    )
    
  }

  mainSubmit() { this.GetuserServicenew.addData(this.user)
    .subscribe(user => {
      this.users.push(user)

  });
  }
  


  onDeleteClick(id){
    this.GetuserServicenew.adddelte(id).subscribe(user => {
        
        
    });
}


  onEditClick(user){
    this.isEdit = true;
    this.user = user;
}

   



}
