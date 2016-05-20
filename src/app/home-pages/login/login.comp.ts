import {Component} from 'angular2/core';
import {Router, RouterLink , RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginService} from './login.serv';
import {Http, Headers} from 'angular2/http';


@Component({
    selector: 'login',

    templateUrl: 'src/app/home-pages/login/login.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/login/login.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService]
})

export class LoginComponent {
    constructor(private router: Router, private http: Http) {
        console.log('constructor LoginComponent ');
    }

    login: structLogin = {
        UserName: '',
        Password: '',
    };

    ngOnInit() {
    }

    loginfinished() {
        this.router.navigate(['Entities', {}]);
    }

    loginService: LoginService = new LoginService(this.http, this.router, this.loginfinished);

    okClicked = () => {
        var loginService: LoginService = new LoginService(this.http, this.router, this.loginfinished);
        this.loginService.authenticate(this.login.UserName, this.login.Password);
    }

}