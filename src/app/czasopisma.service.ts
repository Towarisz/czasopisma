import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CzasopismaService {
  public czasopisma: any;
  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Cache-Control':
        'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      Pragma: 'no-cache',
      Expires: '0',
    });
  }

  public getData() {
    return this.httpClient.get('./assets/czasopisma.xml', {
      responseType: 'text',
      headers: this.headers,
    });
  }

  public editData(
    id: string,
    editname: string,
    editsrc: string,
    edityears: string
  ) {
    let data = {
      id: id,
      name: editname,
      src: editsrc,
      years: edityears,
    };
    return this.httpClient.post('./update.php', data, {
      headers: this.headers,
    });
  }
}
