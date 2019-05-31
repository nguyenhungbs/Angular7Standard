import { Component, OnInit } from '@angular/core';
import { ApiCommonService } from '../../shared/apicommon.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styles: []
})
export class PatientsComponent implements OnInit {


  constructor(private _apiCommonService: ApiCommonService) {

  }

  ngOnInit() {
  }

}
