import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Compra } from '../../Entities/Compra';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistCompraComponent implements OnInit {

  compras:Compra[] = Array();
  entidad="compra";

  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPlist(this.entidad)
      .subscribe(data => {this.compras = data;});
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  verCompra(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["compra/ver", id])
  }

  editarCompra(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["compra/editar",id])
  }

  eliminarCompra(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["compra/eliminar",id])
  }

}
