import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm: FormGroup;
  /*loginForm = new FormGroup({
    name: new FormControl(),
    pass: new FormControl()
  });*/

  constructor(private fb: FormBuilder, private router: Router) {
    this.createLoginForm();
   }

  createLoginForm(){
    this.loginForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      pass: ['',Validators.required]
    });
  }
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.router.navigate(['/mail']);
    //console.log(this.username);
  }
}
