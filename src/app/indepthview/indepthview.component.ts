import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-indepthview',
  templateUrl: './indepthview.component.html',
  styleUrls: ['./indepthview.component.css'],
})
export class IndepthviewComponent implements OnInit {
  constructor(private route: Router, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe((data) => {
      debugger;
    });
  }

  navigateTo() {
    this.route.navigate(['home']);
  }
}
