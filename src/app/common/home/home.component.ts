import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Location } from '@angular/common';
import { Producto } from 'src/app/Entities/Producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:Producto[] = Array();
  entidad="serie";

  constructor(private service:ServiceService, private router: Router, private _location: Location) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
    .subscribe(data => {this.productos = data;});
  }

}
