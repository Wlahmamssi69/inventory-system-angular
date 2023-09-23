import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent implements OnInit{

  constructor(
    private router: Router
  ){}
  ngOnInit(): void {
  }

  nouvelArticle():void {
    this.router.navigate(['newarticle'])
  }
}
