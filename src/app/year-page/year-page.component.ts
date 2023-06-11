import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CzasopismaService } from '../czasopisma.service';

@Component({
  selector: 'app-year-page',
  templateUrl: './year-page.component.html',
  styleUrls: ['./year-page.component.scss'],
})
export class YearPageComponent {
  selectedYears: any;
  name: String = '';
  constructor(
    private route: ActivatedRoute,
    private czasopismaService: CzasopismaService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.name = params['id'];
      if (
        typeof czasopismaService.czasopisma == 'undefined' ||
        typeof czasopismaService.czasopisma.lata[`${this.name}`] == 'undefined'
      ) {
        this.router.navigate(['home']);
        return;
      }
      this.selectedYears =
        czasopismaService.czasopisma.lata[`${this.name}`].split(',');
    });
  }
}
