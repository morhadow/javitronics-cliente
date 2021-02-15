import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Producto } from '../../Entities/Producto';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistProductoComponent implements OnInit {

  productos:Producto[] = Array();
  entidad="producto"

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.productos = data;});
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  verProducto(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["producto/ver", id])
  }

  editarProducto(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["producto/editar",id])
  }

  eliminarProducto(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["producto/eliminar",id])
  }
}
