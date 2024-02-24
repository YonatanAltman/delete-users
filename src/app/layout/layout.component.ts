import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, NgForOf],
  template: `

    <header>
      <a class="link" *ngFor="let item of links" [routerLink]="item.link">
        {{ item.label }}
      </a>
    </header>
    <div class="body">

      <ng-content></ng-content>
    </div>
    <footer>THIS IS FOOTER</footer>
  `,
  styles:`
  :host{
    height: 100vh;
    display: block;
    background: orange;
    header{
      height: 30px;
    }
    .body{
      height: 90vh;
    }
  }
  `
})
export class LayoutComponent {

  readonly links = [
    {link:'home', label:'Home',icon:''},
    {link:'main', label:'Main',icon:''},
    {link:'name', label:'Name',icon:''},
    {link:'users', label:'Users 🥹',icon:''},
  ]
}


export class MyComponent{

}
