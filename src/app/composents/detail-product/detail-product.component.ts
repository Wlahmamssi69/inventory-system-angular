import { Component } from '@angular/core';
import {faCircleInfo,faQrcode,faPlus,faPenToSquare,faTrashCan,
  faRectangleList,faDollarSign,faCube,faBarcode} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent {
faCircleInfo=faCircleInfo;
faQrcode=faQrcode;
  faPlus=faPlus;
  faPenToSquare=faPenToSquare;
  faTrashCan=faTrashCan;
  faRectangleList=faRectangleList;
  faDollarSign=faDollarSign;
  faCube=faCube;
  faBarCode=faBarcode;
}
