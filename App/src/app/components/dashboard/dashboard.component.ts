import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  fiction() {
    this.router.navigateByUrl('fiction');
  }
}
