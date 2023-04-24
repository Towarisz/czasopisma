import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as xml2js from 'xml2js';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements AfterViewInit{
  
  
  @ViewChild('moneyInput')
  public moneyInput: ElementRef | undefined;
  value="";
  public czasopisma: any;
  public keys: any;
  
			
		constructor(private httpClient:HttpClient){}
  
  ngAfterViewInit(): void {
    this.moneyInput?.nativeElement.addEventListener('input',((event:any)=>{
      if(this.value.match("[a-zA-z]")){
        this.value = this.value.slice(0,this.value.length-1)
      }else if(this.value.match("[0-9]*[.][0-9]*[.]")){
        this.value = this.value.slice(0,this.value.length-1)
      }else if(this.value.match("[0-9]*[.][0-9]{4}")){
        this.value = this.value.slice(0,this.value.length-1)
      }
    }))

    
		this.httpClient.get("./assets/czasopisma.xml", { responseType: 'text' })
		.subscribe((data) => {
			const parser = new xml2js.Parser({explicitArray: false});
    	parser.parseString(data, (err, result) => {
        this.czasopisma = result;
        this.keys = Object.values(result.czasopisma.zmienne);                
    	})
		},
		error => {
			console.log("Error", error);
		});
    
  }
    

}
