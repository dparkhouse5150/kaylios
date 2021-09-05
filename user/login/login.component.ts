import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import {titleLengthChecker} from '../../validation"'
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // loginForm;
    socialUser: SocialUser
    isLoggedIn: boolean

    constructor(
        private loginForm: FormGroup,
        private socialAuthService: SocialAuthService,
    ) { 
        
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({

        })
    }

    loginWithGoogle = ():void => {
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    }

    logout = ():void => {
        this.socialAuthService.signOut
    }
}
