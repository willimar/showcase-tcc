import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { PersonGroupComponent } from './layout/registers/person/person-group/person-group.component';
import { PersonTypeComponent } from './layout/registers/person/person-type/person-type.component';
import { PersonComponent } from './layout/registers/person/person/person.component';
import { AuthenticationComponent } from './layout/system/authentication/authentication.component';
import { AuthGuard } from './services/system/auth.guard';

const routes: Routes =
[
  {
    path: '',
    component: HomeComponent,
    children:
    [
      { path: '', component: HomeComponent },
      { path: 'person', component: PersonComponent },
      { path: 'person-type', component: PersonTypeComponent },
      { path: 'person-group', component: PersonGroupComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children:
    [
      { path: '', component: AuthenticationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
