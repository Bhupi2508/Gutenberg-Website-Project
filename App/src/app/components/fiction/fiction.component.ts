import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product, Service } from 'src/app/services/search.service';

@Component({
  selector: 'app-fiction',
  providers: [Service],
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.scss']
})
export class FictionComponent implements OnInit {
  result: any;
  newimage: any
  products: Product[];

  constructor(private service: DataService, service_2: Service) {
    this.products = service_2.getProducts();
  }

  ngOnInit(): void {
    this.service.getMethod('http://skunkworks.ignitesol.com:8000/books').subscribe((data: any) => {
      this.result = data.results
    })
  }

}
