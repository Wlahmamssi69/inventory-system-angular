import { Component } from '@angular/core';
import {faPlus,faArrowUpFromBracket,faDownload} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-btn-crud',
  templateUrl: './btn-crud.component.html',
  styleUrls: ['./btn-crud.component.scss']
})
export class BtnCrudComponent {
  faPlus=faPlus;
  faArrowUpFromBracket=faArrowUpFromBracket;
  faDownload=faDownload;
}
