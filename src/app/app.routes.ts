import {Routes} from '@angular/router';
import {ComponentNameComponent} from "./component-name/component-name.component";
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./main/main.component";
import {UsersComponent} from "./users/users.component";


// SPA -
export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'name'},
  {path: 'name', component: ComponentNameComponent},
  {path: 'home', component: HomeComponent},
  {path: 'main', component: MainComponent},
  {path: 'users', component: UsersComponent},
];
