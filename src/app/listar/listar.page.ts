import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  usuarios:Observable<any[]>

  constructor(private route: ActivatedRoute, private router: Router,
    public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuarios()
  }
  editarUsuarioById(uid: string){
    const url = '/registro/' + uid;
    console.log(url);
    this.router.navigate([url]); 

  }
  async borrarContacto(uid: string){
    this.usuarioService.borrarContacto(uid);
    
  }

  async confirmarBorrado(uid: string) {
    
        this.borrarContacto.bind(this, uid);
  }


  
}
