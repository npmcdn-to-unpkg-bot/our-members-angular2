/// <reference path="../home-pages-links/home-pages-links.comp.ts" />
import {Router} from 'angular2/router';
import {Component, Directive} from 'angular2/core';
import {HomePagesLinks}  from '../home-pages-links/home-pages-links.comp';
import {HomePagesBottomButtons}  from '../home-pages-bottom-buttons/home-pages-bottom-buttons.comp';
import {HomePageContent}  from '../home-page-content/home-page-content.comp';



@Component({
    selector: 'home-page',
    styleUrls: ['src/app/home-pages/styles/home-pages.css'],
    templateUrl: 'src/app/home-pages/home-page/home-page.html',
    directives: [HomePagesLinks, HomePagesBottomButtons, HomePageContent]
})

export class HomePageComponent {

}