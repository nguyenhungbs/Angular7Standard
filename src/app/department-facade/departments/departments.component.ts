import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Department } from 'src/app/shared/department.model';
import { ApiCommonService } from 'src/app/shared/apicommon.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DepartmentAddComponent } from '../department-item/departmentAdd.component';
import { DepartmentUpdateComponent } from '../department-item/departmentUpdate.component';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departmentItems: Department[];
  _rowCurrent: Department;
  constructor(private _departmentService: DepartmentService,
    private _apiCommonService: ApiCommonService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.PaginationDepartment();
  }

  PaginationDepartment() {
    this._departmentService.PaginationDepartment();
    this.departmentItems = this._departmentService._departments;
  }

  ResetForm(form?: NgForm) {
  }

  ConfigureDialog(itemIndex?, departmentId?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { itemIndex, departmentId };
    return dialogConfig;
  }

  OpenAddDialog() {
    this.dialog.open(DepartmentAddComponent, this.ConfigureDialog());
  }

  OpenUpdateDialog() {
    this.dialog.open(DepartmentUpdateComponent, this.ConfigureDialog());
  }

  RowSelected(rowSelected: any) {
    this._rowCurrent = rowSelected;
    console.log(this._rowCurrent);
  }

  DeleteOne() {

  }




}
