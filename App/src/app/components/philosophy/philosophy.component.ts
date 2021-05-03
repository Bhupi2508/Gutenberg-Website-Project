import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss']
})
export class PhilosophyComponent implements OnInit {
  result: any;
  data: any;
  defaultPageSize: any = 0;
  active: any = false;
  prevPage: any = 0;
  nextpage: any = 2;
  mainPage: any = 1;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getMethod('http://skunkworks.ignitesol.com:8000/books/?topic=philosophy').subscribe((data: any) => {
      this.data = data;
      this.result = data.results;
      let pageSize = 1;
      this.defaultPageSize = Number(pageSize);
      this.prevPage = this.defaultPageSize;
      this.mainPage += this.defaultPageSize;
      this.nextpage += this.defaultPageSize;
    })
  }

  search(search: any) {
    let value;
    value = search.target.value
    if (search.target.value.indexOf(' ') >= 0) {
      value = search.target.value.replace(/\s/g, "%20")
    }
    this.service.getSearchMethod(value, '/?topic=philosophy').subscribe((data: any) => {
      this.result = data.results
    })
  }

  // pagination for previous page
  PrevPagination() {
    if (this.prevPage === 1) {
      this.prevPage = 1;
    } else {
      this.prevPage = this.prevPage - 1;
    }
    this.mainPage = this.prevPage + 1;
    this.nextpage = this.mainPage + 1
    this.service.getMethod(`http://skunkworks.ignitesol.com:8000/books/?page=${this.prevPage}&topic=philosophy`).subscribe((data: any) => {
      this.result = data.results
    })
    if (this.prevPage === 1) {
      this.prevPage = 1;
    } else {
      this.prevPage = this.mainPage - 1;
    }
    if (this.mainPage === 2) {
      this.mainPage = 2;
    } else {
      this.mainPage = this.nextpage - 1;
    }
    if (this.nextpage === 3) {
      this.nextpage = 3;
    } else {
      this.nextpage = this.nextpage;
    }
  }

  // pagination for static (mid)
  pagination() {
    this.service.getMethod(`http://skunkworks.ignitesol.com:8000/books/?page=${this.mainPage}&topic=fiction`).subscribe((data: any) => {
      this.result = data.results
    })
  }

  // pagination for nextpage
  nextPagination() {
    this.prevPage = this.mainPage - this.prevPage;
    this.mainPage = this.mainPage;
    this.nextpage = this.mainPage + 1
    this.service.getMethod(`http://skunkworks.ignitesol.com:8000/books/?page=${this.nextpage}&topic=fiction`).subscribe((data: any) => {
      console.log(data);
      this.result = data.results
    });
    this.prevPage = this.mainPage;
    this.mainPage = this.nextpage;
    this.nextpage = this.nextpage + 1
  }

}
