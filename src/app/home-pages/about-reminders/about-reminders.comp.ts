import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'about-reminders',

    templateUrl: 'src/app/home-pages/about-reminders/about-reminders.html',
    styleUrls: ['src/app/home-pages/styles/home-pages.css', 'src/app/home-pages/about-reminders/about-reminders.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AboutRemindersComponent {

}