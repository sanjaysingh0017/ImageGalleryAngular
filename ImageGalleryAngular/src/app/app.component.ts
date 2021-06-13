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
  showSlideView: boolean = false;
  constructor() {
    this.numbers = Array(30).fill(1).map((x,i)=>i);
    console.log(this.numbers);
  }
  
  srcFullView: string ='';
  openImage(src:string) {
    this.srcFullView = src;
    this.showFullView = true;
  }
  closeFullView() {
    this.showFullView = false;
    clearInterval(this.interval);
  }
  closeSlideView() {
    this.showSlideView = false;
    clearInterval(this.interval);
  }
  interval: any;
  src1: string ='';
  src2: string ='';
  src3: string ='';
  startSlides() {

    this.showSlideView = true;
      var i=0;
      this.src1 = "assets/"+(i+30)+'.jpg';
      this.src2 = "assets/"+(i+1)+'.jpg';
      this.src3 = "assets/"+(i+2)+'.jpg';
      this.interval = setInterval( () => {
        if(i > 30) {
          i = 0;
        }
        i++;
        this.src1 = "assets/"+(i)+'.jpg';
        this.src2 = "assets/"+(i+1)+'.jpg';
        this.src3 = "assets/"+(i+2)+'.jpg';
          
      }, 4000, this );
  }
}
