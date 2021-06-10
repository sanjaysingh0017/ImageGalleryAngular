import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ImageGalleryAngular';
  
  numbers: any;
  showFullView: boolean = false;
  constructor() {
    this.numbers = Array(30).fill(1).map((x,i)=>i);
    console.log(this.numbers);
  }
  src: string ='';
  openImage(src:string) {
    this.src = src;
    this.showFullView = true;
  }
  closeFullView() {
    this.showFullView = false;
  }
}
