import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-supplier',
  templateUrl: './page-supplier.component.html',
  styleUrls: ['./page-supplier.component.scss']
})
export class PageSupplierComponent implements OnInit{

  constructor(
    private router : Router
  ) {}

  nouvelSupplier() {
    this.router.navigate(['newsupplier'])
  }

  ngOnInit(): void {
  }
}
