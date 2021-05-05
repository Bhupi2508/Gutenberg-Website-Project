import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.scss']
})
export class FictionComponent implements OnInit {
  result: any;
  data: any;
  defaultPageSize: Number = 0;
  active: any = false;
  prevPage: any = 0;
  nextpage: any = 2;
  mainPage: any = 1;
  findValue: Boolean = false;
  noRecords: Boolean = false;
  url: any;
  onlyOnePage: Boolean = false;
  prev: Boolean = false;
  main: Boolean = false;
  next: Boolean = false;
  first: Boolean = false;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getMethod('http://skunkworks.ignitesol.com:8000/books/?topic=fiction').subscribe((data: any) => {
      if (data.next === null) {
        this.data = data;
        this.result = data.results;
        this.onlyOnePage = true;
      } else {
        this.data = data;
        this.result = data.results;
        let pageSize = 1;
        this.defaultPageSize = Number(pageSize);
        this.prevPage = this.defaultPageSize;
        this.mainPage += this.defaultPageSize;
        this.nextpage += this.defaultPageSize;
        this.onlyOnePage = false;
      }
    })
  }

  search(search: any) {
    let value;
    value = search.target.value
    if (search.target.value.indexOf(' ') >= 0) {
      value = search.target.value.replace(/\s/g, "%20")
    }
    this.findValue = true
    this.service.getSearchMethod(value, '/?topic=fiction').subscribe((data: any) => {
      this.result = data.results;
      if (this.result.length < 1) {
        this.noRecords = true;
      } else {
        this.noRecords = false;
      }
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
    this.nextpage = this.mainPage + 1;
    this.service.getMethod(`http://skunkworks.ignitesol.com:8000/books/?page=${this.prevPage}&topic=fiction`).subscribe((data: any) => {
      this.result = data.results
      this.prev = true;
      this.first = false;
      this.main = false;
      this.next = false;
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
      this.prev = false;
      this.first = false;
      this.main = true;
      this.next = false;
    })
  }

  // pagination for nextpage
  nextPagination() {
    this.prevPage = this.mainPage - this.prevPage;
    this.mainPage = this.mainPage;
    this.nextpage = this.mainPage + 1
    this.service.getMethod(`http://skunkworks.ignitesol.com:8000/books/?page=${this.nextpage}&topic=fiction`).subscribe((data: any) => {
      this.result = data.results
      this.prev = false;
      this.first = false;
      this.main = true;
      this.next = false;
    });
    this.prevPage = this.mainPage;
    this.mainPage = this.nextpage;
    this.nextpage = this.nextpage + 1
  }

  firstPage() {
    if (this.prevPage) {
      this.prevPage = 1;
    }
    this.mainPage = this.prevPage + 1;
    this.nextpage = this.mainPage + 1;
    this.service.getMethod(`http://skunkworks.ignitesol.com:8000/books/?page=${this.prevPage}&topic=fiction`).subscribe((data: any) => {
      this.result = data.results
      this.prev = true;
      this.main = false;
      this.next = false;
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

  bookTextTormat(id: any) {
    this.service.getMethod(`http://skunkworks.ignitesol.com:8000/books/?ids=${id}&topic=fiction`).subscribe((data: any) => {
      const imageFormat = data.results[0].formats;

      for (const key in imageFormat) {
        if (Object.prototype.hasOwnProperty.call(imageFormat, key)) {
          const element = imageFormat[key];

          if (element.endsWith(".htm")) {
            this.url = element;
          } else if (element.endsWith(".txt")) {
            this.url = element;
          }
        }
      }
      window.location.href = this.url
    })

  }
}
