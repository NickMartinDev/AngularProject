import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ComputerPartsService {
    computerParts = [
        {category:'Graphics cards',model:'Nvidia Geforce RTX 3060',price:700,fav:false},
        {category:'Graphics cards',model:'Nvidia Geforce RTX 3070',price:900,fav:false},
        {category:'Graphics cards',model:'Nvidia Geforce RTX 3080',price:1300,fav:false},
        {category:'Graphics cards',model:'Nvidia Geforce RTX 3090',price:1800,fav:false},
        {category:'Processors',model:'AMD Ryzen 3 3600X',price:150,fav:false},
        {category:'Processors',model:'AMD Ryzen 5 5600X',price:300,fav:false},
        {category:'Processors',model:'AMD Ryzen 7 5800X',price:400,fav:false},
        {category:'Processors',model:'AMD Ryzen 9 5900X',price:500,fav:false},
        {category:'Hard Drives',model:'WD 1 TB Hardrive',price:50,fav:false},
        {category:'Hard Drives',model:'WD 2 TB Hardrive',price:60,fav:false},
        {category:'Hard Drives',model:'WD 4 TB Hardrive',price:80,fav:false},
        {category:'Hard Drives',model:'WD 8 TB Hardrive',price:100,fav:false},]

    getParts(){
        return this.computerParts
    }

    filter(category){
        return this.computerParts.filter(v=>v.category === category)
    }

    updateFav(model){
        this.computerParts.forEach(v => {
            if(v.model === model) {
                v.fav = !v.fav
            }
        })
    }
}