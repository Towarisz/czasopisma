import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CzasopismaService } from '../czasopisma.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('moneyInput')
  public moneyInput: ElementRef | undefined;
  value = '';
  public keys: any;
  public czasopisma: any;
  public selectedNewspaper: String = '';
  public selectedYear: String = '';
  public selectedYears: String = '';
  public selectedData: any;

  constructor(public czasopismaServis: CzasopismaService) {
    czasopismaServis.getData().subscribe(
      (data) => {
        const parser = new xml2js.Parser({ explicitArray: false });
        parser.parseString(data, (err, result) => {
          this.czasopisma = result.czasopisma;
          this.keys = Object.values(result.czasopisma.zmienne);
          console.log(this.czasopisma);
        });
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.moneyInput?.nativeElement.addEventListener('input', (event: any) => {
      if (this.value.match('[a-zA-z]')) {
        this.value = this.value.slice(0, this.value.length - 1);
      } else if (this.value.match('[0-9]*[.][0-9]*[.]')) {
        this.value = this.value.slice(0, this.value.length - 1);
      } else if (this.value.match('[0-9]*[.][0-9]{4}')) {
        this.value = this.value.slice(0, this.value.length - 1);
      }
    });
  }

  selectNewspaper(name: String) {
    this.selectedNewspaper = name;
    this.selectedYears = this.czasopisma.lata[`${name}`].split(',');
  }

  deselectNewspaper() {
    this.selectedNewspaper = '';
    this.selectedYear = '';
    this.selectedData = null;
  }

  selectYear(year: String) {
    this.selectedYear = year;
    if (year == '-1') {
      this.selectedData = Object.values(
        this.czasopisma[`${this.selectedNewspaper}`]
      );
    } else {
      this.selectedData = Object.values(
        this.czasopisma[`${this.selectedNewspaper}`]
      ).filter((x: any) => x.$.rok == year);
    }
  }
}
