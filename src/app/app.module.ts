import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialMediaComponent } from './components/shared/controls/social-media/social-media.component';
import { LoadComponent } from './components/shared/controls/load/load.component';
import { SystemHeaderComponent } from './components/shared/layout/system-header/system-header.component';
import { SystemFooterComponent } from './components/shared/layout/system-footer/system-footer.component';
import { SystemMenuComponent } from './components/shared/layout/system-menu/system-menu.component';
import { HomeComponent } from './layout/home/home.component';
import { PersonComponent } from './layout/registers/person/person/person.component';
import { AuthenticationComponent } from './layout/system/authentication/authentication.component';
import { PersonTypeComponent } from './layout/registers/person/person-type/person-type.component';
import { FormBaseComponent } from './layout/registers/shared/form-base/form-base.component';
import { PannelButtonsComponent } from './components/shared/controls/pannel-buttons/pannel-buttons.component';
import { PersonTypeViewComponent } from './layout/registers/person/person-type/person-type-view/person-type-view.component';
import { PersonTypeFormComponent } from './layout/registers/person/person-type/person-type-form/person-type-form.component';
import { InputBaseComponent } from './components/shared/controls/inputs/input-base/input-base.component';
import { InputTextComponent } from './components/shared/controls/inputs/input-text/input-text.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonGroupComponent } from './layout/registers/person/person-group/person-group.component';
import { PersonGroupViewComponent } from './layout/registers/person/person-group/person-group-view/person-group-view.component';
import { PersonGroupFormComponent } from './layout/registers/person/person-group/person-group-form/person-group-form.component';
import { PersonGroupFormPermissionComponent } from './layout/registers/person/person-group/person-group-form-permission/person-group-form-permission.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaComponent,
    LoadComponent,
    SystemHeaderComponent,
    SystemFooterComponent,
    SystemMenuComponent,
    HomeComponent,
    AuthenticationComponent,
    PersonComponent,
    PersonTypeComponent,
    FormBaseComponent,
    PannelButtonsComponent,
    PersonTypeViewComponent,
    PersonTypeFormComponent,
    InputBaseComponent,
    InputTextComponent,
    PersonGroupComponent,
    PersonGroupViewComponent,
    PersonGroupFormComponent,
    PersonGroupFormPermissionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgSelect2Module,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
