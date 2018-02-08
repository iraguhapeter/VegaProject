import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistration } from '../../models/User.registration.interface';
import { UserService } from '../../services/user.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  errors: string;  
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  public registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(valid)
    {
        this.userService.register(value.email,value.password,value.firstName,value.lastName,value.location)
                  .finally(() => this.isRequesting = false)
                  .subscribe(
                    result  => {if(result){
                        this.router.navigate(['/login'],{queryParams: {brandNew: true,email:value.email}});                         
                    }},
                    errors =>  this.errors = errors);
    }      
 } 

}