import {Component, OnInit} from '@angular/core';
declare const jQuery: any;
import {Menu} from "./menu";
import {Router} from '@angular/router';
import { faCoffee,faChartLine,faBoxOpen,faUsers,faTruck,faCartShopping,faUserGear,faHouse } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faCoffee=faCoffee;
  faHouse=faHouse;
  faChartLine=faChartLine;
  faBoxOpen=faBoxOpen;
  faUsers=faUsers;
  faTruck=faTruck;
  faCartShopping=faCartShopping;
  faUserGear=faUserGear;

  getMenuIcon(iconName?: string) {
    switch (iconName) {
      case 'faBoxOpen':
        return this.faBoxOpen;
      case 'faHouse':
        return this.faHouse;
      case 'faUsers':
        return this.faUsers;
      case 'faTruck':
        return this.faTruck;
      case 'faCartShopping':
        return this.faCartShopping;
      case 'faUserGear':
        return this.faUserGear;
      default:
        return this.faUserGear;
    }
  }

  public menuProperties: Array<Menu> = [
    {
    id: '1',
    title: 'Accueil',
    icon: 'faHouse',
    url: '',/*
    sousMenu: [
      {
        id: '11',
        title: 'Reports',
        icon: '',
        url: '',
      },
      {
        id: '12',
        title: 'dashboard',
        icon: '',
        url: '',
      }
    ]*/
    },
    {
      id: '2',
      title: 'Articles',
      icon: 'faBoxOpen',
      url: 'articles',/*
      sousMenu: [
      {
        id: '21',
        title: 'Reports',
        icon: '',
        url: '',
      },
      {
        id: '22',
        title: 'dashboard',
        icon: '',
        url: '',
      }
    ]*/
    },
    {
      id: '3',
      title: 'Clients',
      icon: 'faUsers',
      url: '',/*
      sousMenu: [
        {
          id: '31',
          title: 'Reports',
          icon: '',
          url: '',
        },
        {
          id: '32',
          title: 'dashboard',
          icon: '',
          url: '',
        }
      ]*/
    },
    {
      id: '4',
      title: 'Fournisseurs',
      icon: 'faTruck',
      url: '',/*
      sousMenu: [
        {
          id: '41',
          title: 'Reports',
          icon: '',
          url: '',
        },
        {
          id: '42',
          title: 'dashboard',
          icon: '',
          url: '',
        }
      ]*/
    },
    {
      id: '5',
      title: 'Commandes',
      icon: 'faCartShopping',
      url: '',
    },
    {
      id: '6',
      title: 'Utilisateurs',
      icon: 'faUserGear',
      url: '',
    },

]
  constructor( private router : Router){

  }
  ngOnInit(): void {
  }
  navigate(url?: string): void {
  this.router.navigate([url]);
  }
}
