import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { loginComponent }  from './login/login.component';
import { signupComponent }  from './signup/signup.component';
import { forgotComponent }  from './login/forgot/forgot.component';
import { notFoundComponent }  from './others/notFound.component';
import { sidebarComponent }  from './dashboard/includes/sidebar/sidebar.component';
import { dashboardIndexComponent }  from './dashboard/index/index.component';

const routes: Routes = [
  {path: "login", component: loginComponent},
  {path: "signup", component: signupComponent},
  {path: "forgot", component: forgotComponent},
  {path: "dashboard", component: dashboardIndexComponent},
  {path: "", pathMatch: "full", redirectTo: "login"},
  {path: "**", component: notFoundComponent}
]

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), HttpModule, FormsModule ],
  declarations: [ AppComponent, loginComponent, notFoundComponent, forgotComponent, dashboardIndexComponent, sidebarComponent, signupComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
