import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CzasopismaService {
  public czasopisma: any;
  constructor(private httpClient: HttpClient) {}

  public getData() {
    return this.httpClient.get('./assets/czasopisma.xml', {
      responseType: 'text',
    });
  }
}
