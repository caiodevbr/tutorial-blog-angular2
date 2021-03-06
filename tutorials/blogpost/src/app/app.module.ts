import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostCreateComponent } from './blogpost/blogpost.create.component';

import {
  routing,
  appRoutingProviders
} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogpostComponent,
    BlogpostCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
