import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {

  constructor(private _presupuestoService: PresupuestoService, private router: Router) { }

  ngOnInit(): void {
    if(this._presupuestoService.presupuesto === 0){
      this.router.navigate(['/ingresar-presupuesto'])
    }
  }

}
