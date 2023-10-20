import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  items: {name: string, picture: string, dimensions: string, price: number} [] = [
    {name: "/ ART NAME HERE /", picture: 'Rectangle 6.png', dimensions: "25*25cm", price: 24.99},
    {name: "/ ART NAME HERE /", picture: 'Rectangle 6-1.png', dimensions: "30*30cm", price: 24.99},
    {name: "/ ART NAME HERE /", picture: 'Rectangle 6-2.png', dimensions: "20*20cm", price: 24.99},
    {name: "/ ART NAME HERE /", picture: 'Rectangle 6-3.png', dimensions: "25*25cm", price: 24.99},
    {name: "/ ART NAME HERE /", picture: 'Rectangle 6-4.png', dimensions: "25*35cm", price: 29.99},
    {name: "/ ART NAME HERE /", picture: 'Rectangle 6-5.png', dimensions: "25*25cm", price: 24.99},
  ];

}
