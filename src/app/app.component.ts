import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  constructor(private router:Router ,private route:ActivatedRoute,private _formBuilder: FormBuilder ){
    this.router.navigate(['list'],{relativeTo: this.route});
  
  }
  
  ngOnInit(): void {
  
  }

}
