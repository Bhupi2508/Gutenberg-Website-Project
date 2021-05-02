import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent implements OnInit {
  result: any;

  constructor(private service: DataService) { }
  ngOnInit(): void {
    this.service.getMethod('http://skunkworks.ignitesol.com:8000/books').subscribe((data: any) => {
      this.result = data.results
    })
  }
}
