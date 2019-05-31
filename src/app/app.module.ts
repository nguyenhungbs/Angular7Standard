import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs'
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentService } from './shared/department.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { PatientService } from './shared/patient.service';
import { ApiCommonService } from './shared/apicommon.service';
import { DepartmentAddComponent } from './department-facade/department-item/departmentAdd.component';
import { DepartmentUpdateComponent } from './department-facade/department-item/departmentUpdate.component';
import { PatientUpdateComponent } from './patient-facade/patient-item/patientUpdate.component';
import { PatientAddComponent } from './patient-facade/patient-item/patientAdd.component';
import { UserAddComponent } from './user-facade/user-item/userAdd.component';
import { UserUpdateComponent } from './user-facade/user-item/userUpdate.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    DepartmentAddComponent,
    DepartmentUpdateComponent,
    PatientUpdateComponent,
    PatientAddComponent,
    UserAddComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
  ],

  entryComponents: [
    DepartmentAddComponent,
    DepartmentUpdateComponent,
    PatientAddComponent,
    PatientUpdateComponent,
    UserAddComponent,
    UserUpdateComponent,
  ],
  providers: [DepartmentService, UserService, PatientService, ApiCommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
