import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/Entities/Compra';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewCompraComponent implements OnInit {

  compras: Compra = new Compra;
  entidad="compra";

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }
  
  guardarCompra() {
    let objeto=JSON.stringify(this.compras);
     this.service.add(this.entidad, objeto)
    .subscribe(data=> {
      alert("Agregado con éxito");
      this.router.navigate(["compra/lista"]);
    })
  }

  atras() {
    this._location.back();
  }

}
