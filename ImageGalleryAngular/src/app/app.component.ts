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
    clearInterval(this.interval);
  }
  interval: any;
  startSlides() {
    this.src = "assets/"+1+'.jpg';
    this.showFullView = true;
      var i=2;
      this.interval = setInterval( () => {
        if(i > 30) {
          i = 1;
        }
        this.src = "assets/"+i+'.jpg';
          i++;
      }, 2000, this );
  }
}
