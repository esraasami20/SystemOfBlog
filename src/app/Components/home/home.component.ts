import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Blog, Category } from 'src/app/models/interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];
  Name = localStorage.getItem('email');
  constructor(private router: Router, private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
    this.getCategory();
  }
  getBlogs() {
    this.blogs = [];
    this.blogService.getAll().subscribe((a) => {
      console.log(a);
      this.blogs = a;
    });
  }
  Category: Category[] = [];
  getCategory() {
    this.blogService.getCategory().subscribe((a) => {
      this.Category = a;
    });
  }
  categories=[];
  getCategoryById(id: any) {
    this.blogs = [];
    this.blogService.getCategoryById(id.target.value).subscribe((a) => {
      this.blogs = a.blogs;
      if(this.blogs.length==0){
        alert('this category does not contain blogs yet ^_^')
        this.getBlogs();
      }
    });
  }
  addComment(c: number, b: string) {
    console.log(c);
    let params = {
      CommentBody: b,
    };
    this.blogService.addComment(c, params).subscribe((a) => {
      console.log(a);

      this.getBlogs();
    });
  }
  logOut() {
    localStorage.clear();
  }
}
