import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup
    socialUser: SocialUser
    isLoggedIn: boolean

    constructor(
        private FormBuilder: FormBuilder,
        private socialAuthService: SocialAuthService,
    ) { }

    ngOnInit(): void {
        this.loginForm = this.FormBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        })

        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user
            this.isLoggedIn = (user !== null)

            console.log(this.socialUser)
        })
    }

    loginWithGoogle = ():void => {
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    }

    logout = ():void => {
        this.socialAuthService.signOut()
    }
}
