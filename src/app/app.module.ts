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

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NewspaperadditionComponent } from './newspaperaddition/newspaperaddition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageRoutingComponent,
    YearPageComponent,
    NewspaperComponent,
    WelcomePageComponent,
    NewspaperEditionComponent,
    NewspaperadditionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [CzasopismaService, IdResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
