import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Factura } from '../../Entities/Factura';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistFacturaComponent implements OnInit {

  facturas:Factura[] = Array();
  entidad="factura";

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.facturas = data;});
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  verFactura(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["factura/ver", id])
  }

  editarFactura(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["factura/editar",id])
  }

  eliminarFactura(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["factura/eliminar",id])
  }

}
