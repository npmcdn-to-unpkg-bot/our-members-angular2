/// <reference path="../home-pages-links/home-pages-links.comp.ts" />
import {Router} from 'angular2/router';
import {Component, Directive} from 'angular2/core';
import {HomePagesLinks}  from '../home-pages-links/home-pages-links.comp';
import {HomePagesBottomButtons}  from '../home-pages-bottom-buttons/home-pages-bottom-buttons.comp';
import {AboutTrialPeriodContent}  from '../about-trial-period-content/about-trial-period-content.comp';



@Component({
    selector: 'about-trial-period',
    styleUrls: ['src/app/home-pages/styles/home-pages.css'],
    templateUrl: 'src/app/home-pages/about-trial-period/about-trial-period.html',
    directives: [HomePagesLinks, HomePagesBottomButtons, AboutTrialPeriodContent]
})

export class AboutTrialPeriodComponent {

}