import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CzasopismaService } from '../czasopisma.service';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.scss'],
})
export class NewspaperComponent {
  public selectedYear: String = '';
  public selectedNewspaper: String = '';
  public selectedData: any;
  constructor(
    private route: ActivatedRoute,
    private czasopismaService: CzasopismaService
  ) {
    this.route.parent?.data.subscribe((data) => {
      this.route.params.subscribe((params) => {
        this.selectedNewspaper = data['idFromParent'];
        this.selectedYear = params['date'];

        if (this.selectedYear == 'all') {
          this.selectedData = Object.values(
            this.czasopismaService.czasopisma[`${this.selectedNewspaper}`]
          );
        } else {
          this.selectedData = Object.values(
            this.czasopismaService.czasopisma[`${this.selectedNewspaper}`]
          ).filter((x: any) => x.$.rok == this.selectedYear);
        }
      });
    });
  }
}
