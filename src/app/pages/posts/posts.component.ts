import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  public mensajes: any;

  ngOnInit() {
    this.mensajes = this.dataService.getPosts();
    // .subscribe((data: any)=>{
    //   this.mensajes = data;
    // });
  }

  listenClick( id ){
    console.log('Click en : ', id)
  }

}
