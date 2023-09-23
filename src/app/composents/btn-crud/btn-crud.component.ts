import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faPlus,faArrowUpFromBracket,faDownload} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-btn-crud',
  templateUrl: './btn-crud.component.html',
  styleUrls: ['./btn-crud.component.scss']
})
export class BtnCrudComponent implements OnInit{
  faPlus=faPlus;
  faArrowUpFromBracket=faArrowUpFromBracket;
  faDownload=faDownload;
  @Output( )
  clickEvent = new EventEmitter();

  constuctor(){ }
  ngOnInit() :void {
  }

  bouttonNouveauClick() : void {
    this.clickEvent.emit();
  }
}
