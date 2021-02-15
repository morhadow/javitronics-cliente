import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Carrito } from '../../Entities/Carrito';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistCarritoComponent implements OnInit {

  carritos:Carrito[] = Array();
  entidad="carrito";

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.carritos = data;});
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  verCarrito(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["carrito/ver", id])
  }

  editarCarrito(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["carrito/editar",id])
  }

  eliminarCarrito(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["carrito/eliminar",id])
  }

}
