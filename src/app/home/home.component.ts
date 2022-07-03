import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from '../datashare.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allData = [];
  addFlag = false;

  dataObj = {
    title: '',
    division: '',
    project_owner: '',
    budget: '',
    status: '',
    created: '',
    modified: '',
  };
  constructor(private datashare: DatashareService, private route: Router) {}
  ngOnInit() {
    debugger;
    this.datashare.dataLoad().subscribe(
      (result: any) => {
        debugger;
        this.allData = result;
      },
      (error) => {
        debugger;
      }
    );
  }

  navigateTo(obj) {
    debugger;
    this.route.navigate(['indepth', { data: obj }]);
  }

  AddRecord() {
    this.addFlag = true;
  }

  save() {
    this.allData.unshift(this.dataObj);
    this.addFlag = false;
  }
}
