import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

 
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  buttonDisabled: boolean = false;

  filterPost='';

  categorias!: Categoria[];


  constructor(private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getAll().subscribe(
      c => this.categorias=c
    );
  }
  delete(categoria:Categoria):void{
    console.log("Delege");
    this.categoriaService.delete(categoria.categoria_id).subscribe(
      res=> this.categoriaService.getAll().subscribe(
        response=> this.categorias=response
      )
    );
  }

}
