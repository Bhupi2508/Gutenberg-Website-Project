import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-humour',
  templateUrl: './humour.component.html',
  styleUrls: ['./humour.component.scss']
})
export class HumourComponent implements OnInit {
  result: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getMethod('http://skunkworks.ignitesol.com:8000/books/?topic=humour').subscribe((data: any) => {
      this.result = data.results
    })
  }

  search(search: any) {
    let value;
    value = search.target.value
    if (search.target.value.indexOf(' ') >= 0) {
      value = search.target.value.replace(/\s/g, "%20")
    }
    this.service.getSearchMethod(value, '/?topic=humour').subscribe((data: any) => {
      this.result = data.results
    })
  }
}
