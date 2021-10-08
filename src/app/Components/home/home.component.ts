import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];
  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs(){
    this.blogs=[];
    this.blogService.getAll().subscribe((a) => {
      console.log(a);
      this.blogs = a;
    });
  }
  addComment(a:number,b:string)
  {
    let params = {
      CommentBody:b,
    };
    this.blogService.addComment(a, params).subscribe(a=>{
        console.log(a);
      
        this.getBlogs();     

    });
  };
}
