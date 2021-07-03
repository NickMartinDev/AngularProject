import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InventoryService{
    items = new Subject()
    temp = []

    add(part){
        this.temp.push(part)
        this.items.next(this.temp)
    }

    getItems(){
        return this.items
    }
}