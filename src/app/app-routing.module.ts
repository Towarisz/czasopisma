import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageRoutingComponent } from './home-page-routing/home-page-routing.component';
import { YearPageComponent } from './year-page/year-page.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { IdResolver } from './id.resolver';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NewspaperEditionComponent } from './newspaper-edition/newspaper-edition.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'home', component: HomePageRoutingComponent },
  {
    path: 'home/:id',
    component: YearPageComponent,
    resolve: { idFromParent: IdResolver },
    children: [
      {
        path: ':date',
        component: NewspaperComponent,
      },
    ],
  },
  { path: 'edit', component: NewspaperEditionComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
