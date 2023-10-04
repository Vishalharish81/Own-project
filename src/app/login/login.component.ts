import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router ,private route:ActivatedRoute,private _formBuilder: FormBuilder ){}
  loginGroup!: FormGroup;
 
  ngOnInit(): void {
    this.loginGroup! =this._formBuilder.group({
      UserName: [""],
      Password:[""],
      
  })
  }
  
  updateName(){
    debugger
    let value = this.loginGroup.value
    console.log(value);
    let UserName = value.UserName
    let Password = value.Password
 
    if(UserName == "Harish"){
      if( Password == "Vishal"){
        this.router.navigate(['Home'],{relativeTo: this.route});
  
      }
      else{
        this.alertMessage('Deleted successfully.', 'success');

      }
      
    
    }
    else{
      this.alertMessage('Deleted successfully.', 'success');

     
    }
    debugger
   
  }
  alertMessage(message: string, type: string) {
    let color;
    if (type === 'warning' || type === 'w') {
      color = 'mat-warn';
    }
    else {
      color = 'btn-blue';
    }

    
  }


}

