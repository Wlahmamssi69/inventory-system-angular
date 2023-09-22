import { Component } from '@angular/core';
import {faChevronLeft,faChevronRight,faAnglesLeft,faAnglesRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  faChevronLeft=faChevronLeft;
  faChevronRight=faChevronRight;
  faAnglesLeft=faAnglesLeft;
  faAnglesRight=faAnglesRight;
}
