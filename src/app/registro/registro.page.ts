import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: Usuario = new Usuario();

  constructor(private route: ActivatedRoute, 
    private router: Router,
    public usuarioService: UsuarioService) { 

      
    
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.datos)

    this.usuarioService.saveUsuario(this.datos);
    
    
  }

 

}
