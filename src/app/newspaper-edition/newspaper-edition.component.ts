import { Component } from '@angular/core';
import { CzasopismaService } from '../czasopisma.service';
import * as xml2js from 'xml2js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newspaper-edition',
  templateUrl: './newspaper-edition.component.html',
  styleUrls: ['./newspaper-edition.component.scss'],
})
export class NewspaperEditionComponent {
  public newspaperData: Array<any> = [];
  public newspaperYears: Array<any> = [];
  public displayData: Array<any> = [];
  public years: Array<any> = [];
  public selectedToEdit: number = -1;
  public nameToEdit: string = '';
  public srcToEdit: string = '';
  public yearsToEdit: Array<any> = [];

  displayedColumns: string[] = ['klik', 'src', 'years', 'edit'];
  constructor(
    private czasopismaService: CzasopismaService,
    private router: Router
  ) {
    this.getData();
    for (let i = 0; i < 100; i++) {
      this.years.push(1900 + i + '');
    }
    this.years.push('nr specjalne');
  }
  selectToEdit(index: number) {
    this.selectedToEdit = index;
    this.nameToEdit = this.displayData[index].klik;
    this.srcToEdit = this.displayData[index].src;
    this.yearsToEdit = this.displayData[index].years;
  }

  send() {
    this.czasopismaService
      .editData(
        this.displayData[this.selectedToEdit].klik,
        this.nameToEdit,
        this.srcToEdit,
        this.yearsToEdit.join(',')
      )
      .subscribe((data) => {
        this.czasopismaService.getData().subscribe(
          (data) => {
            const parser = new xml2js.Parser({ explicitArray: false });
            parser.parseString(data, (err, result) => {
              this.czasopismaService.czasopisma = result.czasopisma;
              this.getData();
              const currentUrl = this.router.url;
              this.router
                .navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                  this.router.navigate([currentUrl]);
                });
            });
          },
          (error) => {
            console.log('Error', error);
          }
        );
      });
    this.selectedToEdit = -1;
    this.nameToEdit = '';
    this.srcToEdit = '';
    this.yearsToEdit = [];
  }

  cancel() {
    this.selectedToEdit = -1;
    this.nameToEdit = '';
    this.srcToEdit = '';
    this.yearsToEdit = [];
  }

  getData() {
    this.newspaperData = Object.values(
      this.czasopismaService.czasopisma.zmienne
    );
    let keys = Object.keys(this.czasopismaService.czasopisma.lata);
    keys.sort();
    let temp: any = {};
    for (let i = 0; i < keys.length; i++) {
      temp[keys[i]] = this.czasopismaService.czasopisma.lata[keys[i]];
    }
    this.newspaperYears = Object.values(temp);
    for (let i = 0; i < this.newspaperData.length; i++) {
      this.displayData.push(
        Object.assign(this.newspaperData[i], {
          years: this.newspaperYears[i].split(','),
        })
      );
    }
  }
}
