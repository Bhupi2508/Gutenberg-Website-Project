import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.scss']
})
export class FictionComponent implements OnInit {
  result: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getMethod('http://skunkworks.ignitesol.com:8000/books/?topic=fiction').subscribe((data: any) => {
      this.result = data.results
    })
  }

  search(search: any) {
    let value;
    value = search.target.value
    if (search.target.value.indexOf(' ') >= 0) {
      value = search.target.value.replace(/\s/g, "%20")
    }
    this.service.getSearchMethod(value, '/?topic=fiction').subscribe((data: any) => {
      this.result = data.results
    })
  }

}
