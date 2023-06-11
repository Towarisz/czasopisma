import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CzasopismaService } from './czasopisma.service';
import { HomePageRoutingComponent } from './home-page-routing/home-page-routing.component';
import { YearPageComponent } from './year-page/year-page.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { IdResolver } from './id.resolver';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewspaperEditionComponent } from './newspaper-edition/newspaper-edition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageRoutingComponent,
    YearPageComponent,
    NewspaperComponent,
    WelcomePageComponent,
    NewspaperEditionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [CzasopismaService, IdResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
