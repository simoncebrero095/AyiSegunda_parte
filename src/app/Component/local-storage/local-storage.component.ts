import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {

  constructor() { 
    this.grabar_localstorage();
  }

  ngOnInit(): void {
  }


grabar_localstorage (){
  let nombre: string = 'Fernando'
  let persona ={
    nombre:"juan",
    edad: 18,
    coords:{
      lat:10,
      lng:-10
    }
  } 
  localStorage.setItem( "nombre", nombre);


}



}
