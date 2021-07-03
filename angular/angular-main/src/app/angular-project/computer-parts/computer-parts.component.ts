import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory/inventory.service';
import { ComputerPartsService } from './computer-parts.service';


@Component({
  selector: 'app-computer-parts',
  //templateUrl: './computer-parts.component.html',
  template: `
      <h4>Computer Parts</h4>

      <select (change)="filterItems($event)">
      <option>Graphics cards</option>
      <option>Processors</option>
      <option>Hard Drives</option>
      </select>

      <div [ngClass]="{favourite:c.fav}" *ngFor="let c of computerParts">
      <h4>{{c.category}} ({{c.model}})</h4>
      {{c.price}}<br>
      <button (click)="setFavorite(c)">Fav</button><button (click)="addToInv(c)">Add to Inv</button>
      </div>
  `,
  //styleUrls: ['./computer-parts.component.css']
  styles: [
    `
    .favourite{
        background-color: #f00
    }
    `
]
})

export class ComputerPartsComponent  {

  computerParts = []

  constructor(private cService:ComputerPartsService, private iService:InventoryService) {

  }

  ngOnInit(){
    this.computerParts = this.cService.getParts()
}

filterItems(e){
   // console.log(e.target.value)
   this.computerParts = this.cService.filter(e.target.value)
}

setFavorite(c){
    this.cService.updateFav(c.model)
}

addToInv(c){
    this.iService.add(c)
  }
}
