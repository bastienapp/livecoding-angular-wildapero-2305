import { Component, OnInit } from '@angular/core';
import { Apero } from '../../models/apero.model';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-apero-list',
  templateUrl: './apero-list.component.html',
  styleUrls: ['./apero-list.component.scss']
})
export class AperoListComponent implements OnInit {

  aperoList: Apero[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getAll()
      .subscribe((aperoData) => {
        console.log(aperoData);
        this.aperoList = aperoData;
      })
  }


}
