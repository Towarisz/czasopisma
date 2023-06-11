import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements AfterViewInit {
  @ViewChild('moneyInput')
  public moneyInput: ElementRef | undefined;
  value = '';
  constructor(private router: Router) {}
  ngAfterViewInit(): void {
    this.moneyInput?.nativeElement.addEventListener('input', (event: any) => {
      if (this.value.match('[a-zA-z]')) {
        this.value = this.value.slice(0, this.value.length - 1);
      } else if (this.value.match('[0-9]*[.][0-9]*[.]')) {
        this.value = this.value.slice(0, this.value.length - 1);
      } else if (this.value.match('[0-9]*[.][0-9]{4}')) {
        this.value = this.value.slice(0, this.value.length - 1);
      }
      if (this.value == '666.666') {
        this.router.navigate(['home']);
      }
    });
  }
}
