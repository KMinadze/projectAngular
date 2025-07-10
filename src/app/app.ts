import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'hw_02';

    public i: number = 0;

    public images: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Size_planets_comparison.jpg/1280px-Size_planets_comparison.jpg',
    'https://www.shutterstock.com/image-illustration/planets-solar-system-260nw-112742317.jpg',
    'https://www.shutterstock.com/image-photo/high-resolution-images-presents-planets-260nw-412969960.jpg',
  ];
  
  increase(){
    this.i++
  }
  decrease(){
    this.i--
  }
  
}
