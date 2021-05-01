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
    // this.service.currentMessage.subscribe(message => {
    //   this.message = message
    //   console.log(this.message.results);
    this.service.getMethod('http://skunkworks.ignitesol.com:8000/books').subscribe((data: any) => {
      this.result = data.results
      console.log(this.result);
      
    })
  }

}
