import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Usuario } from 'src/app/Entities/Usuario';

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistUsuarioComponent implements OnInit {

  usuario: Usuario[] = Array();
  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    let entidad="usuario"
    this.service.getPlist(entidad)
      .subscribe(data => {this.usuario = data;});
  }

  handlePage(e:PageEvent) {
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex+1;
  }
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  verUsuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["usuario/ver", id])
  }

  editarUusuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["usuario/editar",id])
  }

  eliminarUsuario(id:number) {
    localStorage.setItem("id", id.toString());
    this.router.navigate(["usuario/eliminar",id])
  }


}
