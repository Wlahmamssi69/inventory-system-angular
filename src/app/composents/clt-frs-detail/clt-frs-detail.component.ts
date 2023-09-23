import { Component } from '@angular/core';
import {faCircleInfo,faQrcode,faPlus,faPenToSquare,faTrashCan,
  faRectangleList,faDollarSign,faCube,faBarcode,faPhone,
  faHouse,faLocationDot,faEarthAmericas
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-clt-frs-detail',
  templateUrl: './clt-frs-detail.component.html',
  styleUrls: ['./clt-frs-detail.component.scss']
})
export class CltFrsDetailComponent {
  faCircleInfo=faCircleInfo;
  faQrcode=faQrcode;
  faPlus=faPlus;
  faPenToSquare=faPenToSquare;
  faTrashCan=faTrashCan;
  faRectangleList=faRectangleList;
  faDollarSign=faDollarSign;
  faCube=faCube;
  faBarCode=faBarcode;
  faPhone=faPhone;
  faLocationDot=faLocationDot;
  faHouse=faHouse;
  faEarthAmericas=faEarthAmericas;
}
