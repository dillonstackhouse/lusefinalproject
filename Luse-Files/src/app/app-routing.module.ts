import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerListDetailComponent } from './ServerList/server-list-detail/server-list-detail.component';
import { LoginDetailComponent } from './login/login-detail/login-detail.component';
import { NewMemberDetailComponent } from './NewMember/new-member-detail/new-member-detail.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


const routes: Routes = [

  { path: 'ServerList', component: ServerListDetailComponent },
  { path: 'Login', component: LoginDetailComponent },
  { path: 'NewMember', component: NewMemberDetailComponent},
  { path: '**', component: NoPageFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
