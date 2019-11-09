import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from './http/http.service';
import { RouteService } from './route/services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sails Angular';

  navbarItems: any[] = [
    { name: 'Home', url: '/' },
    { name: 'Vendors', url: '/content/vendor' },
    { name: 'Clients', url: '/content/client' },
    { name: 'Products', url: '/content/product' },
    { name: 'Success Stories', url: '/content/successstory' },
    { name: 'News Feed', url: '/content/newsfeed' },
    { name: 'Top News', url: '/content/topnews' },
    { name: 'Events', url: '/content/event' },
    { name: 'Login', url: '/login' },
    { name: 'Register', url: '/register' },
    { name: 'Create New', url: '/create' }
  ];
  selectedItem = this.navbarItems[0];

  constructor(
    // private _sailsService: SailsService,
    private router: Router,
    private route: RouteService, // load route service in app component such that all children can access it
    private snackbar: MatSnackBar) {}

  ngOnInit() {


  }

  activateLink(item) {
    this.selectedItem = item;
  }

}
