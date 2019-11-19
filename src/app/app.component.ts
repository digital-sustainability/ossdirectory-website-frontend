import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from './http/http.service';
import { RouteService } from './route/services/route.service';
import { LanguageService } from './data/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { ConfigService } from './config/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedLang = 'de';

  navbarItems: any[] = [
    { name: 'HOME', url: '/' },
    { name: 'VENDOR_PLURAL', url: '/content/vendor' },
    { name: 'CLIENT_PLURAL', url: '/content/client' },
    { name: 'PRODUCT_PLURAL', url: '/content/product' },
    { name: 'SUCCESSSTORY_PLURAL', url: '/content/successstory' },
    { name: 'NEWSFEED', url: '/content/newsfeed' },
    /*{ name: 'Top News', url: '/content/topnews' },
    { name: 'Events', url: '/content/event' },
    { name: 'Login', url: '/login' },
    { name: 'Register', url: '/register' },
    { name: 'Create New', url: '/create' }*/
  ];
  selectedItem = this.navbarItems[0];

  private _langSub: Subscription;
  public isAuthenticated = false;

  constructor(
    // private _sailsService: SailsService,
    private router: Router,
    private route: RouteService, // load route service in app component such that all children can access it
    private snackbar: MatSnackBar,
    private translate: TranslateService,
    private langService: LanguageService,
    private auth: AuthService,
    private config: ConfigService) {}

  ngOnInit() {
    this._langSub = this.langService.currentLang.subscribe(
      lang => {
        this.translate.use(lang);
        this.selectedLang = lang;
      });
    this.config.getSubject().subscribe(d => {
      this.isAuthenticated = d.authenticated;
    });

  }

  activateLink(item) {
    this.selectedItem = item;
  }

  onLangChange(lang: string): void {
    this.langService.changeLang(lang);
  }

}
