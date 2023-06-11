import { Component } from '@angular/core';
import { CzasopismaService } from '../czasopisma.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-home-page-routing',
  templateUrl: './home-page-routing.component.html',
  styleUrls: ['./home-page-routing.component.scss'],
})
export class HomePageRoutingComponent {
  public keys: any;
  constructor(public czasopismaServis: CzasopismaService) {
    czasopismaServis.getData().subscribe(
      (data) => {
        const parser = new xml2js.Parser({ explicitArray: false });
        parser.parseString(data, (err, result) => {
          this.keys = Object.values(result.czasopisma.zmienne);
          czasopismaServis.czasopisma = result.czasopisma;
          console.log(result.czasopisma);
        });
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
