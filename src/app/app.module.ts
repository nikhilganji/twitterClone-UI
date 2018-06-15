import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeTwitterComponent } from './home-twitter/home-twitter.component';
import {AppRoutes} from './app-routing';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import {TwitterService} from './service/twitter.service';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HomeTwitterComponent,
    PostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [TwitterService,HttpClientModule,
    { provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
