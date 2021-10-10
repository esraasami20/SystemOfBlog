import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Blog, Category } from 'src/app/models/interface';
import { BlogService } from 'src/app/services/blog.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private router: Router,
    private blogService: BlogService
  ) {}

  Name=localStorage.getItem('email')
  commentList: any[] = [];
  category: Category[] = [];
  blogs: Blog[] = [];
  Blog = new FormData();
  selectedFile: any;
  selectedFile2: any;
  blogId: any;
  selected: any;
  selectedOnEdit: any;
  title: any;
  body: any;
  showCategory: boolean = true;
  show: boolean = true;
  showBlog: boolean = true;
  openModal: boolean = true;
  image: string = '';
  image2: string = '';
  imageUrl1: string | any;
  imageUrl2: string | any;

  ngOnInit(): void {
    this.getAllCategory();
    this.getBlogs();
    this.getNotification();
  }
  getBlogs() {
    this.blogs = [];
    this.blogService.getAll().subscribe((a) => {
      console.log(a);
      this.blogs = a;
    });
  }
  getAllCategory() {
    this.category = [];
    this.adminService.getAllCategory().subscribe((a) => {
      this.category = a;
    });
  }
  abbCategory(a: string) {
    let params = {
      CategoryName: a,
    };
    this.adminService.addCategory(params).subscribe((a) => {
      alert('you add new category successfully ^_^');
      this.getAllCategory();
    });
    this.showCategory = !this.showCategory;
  }
  selectCategory(event: any) {
    this.selected = event.target.value;
  }
  selectCategoryOnEdit(event: any) {
    this.selectedOnEdit = event.target.value;
  }
  // abbBlog(title: string, body: string) {
  //   console.log(title, body);
  //   let params = {
  //     BlogName: title,
  //     BlogBody: body,
  //     file: this.selectedFile,
  //     CategoryId: this.selected,
  //   };
  //   this.blogService.addBlog(params).subscribe((a) => {
  //     console.log(a);
  //   });
  // }

  showCtegoryForm() {
    this.showCategory = !this.showCategory;
  }
  showBlogForm() {
    this.showBlog = !this.showBlog;
  }
  closeModal() {
    this.openModal = !this.openModal;
  }
  editBlog(a: string, b: string) {}
  OpenModalEdit(item: any) {
    console.log(item);
    this.blogId = item.blogId;
    this.body = item.blogBody;
    this.title = item.blogName;
    this.openModal = !this.openModal;
  }
  onselect(event: any) {
    this.selectedFile = <File>event.target.files[0];
    var reader = new FileReader();
    this.image = event.target.files[0].name;

    reader.readAsDataURL(event.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      this.imageUrl1 = event.target.result;
    };
  }
  onselectEdit(event: any) {
    this.selectedFile2 = <File>event.target.files[0];
    var reader = new FileReader();
    this.image2 = event.target.files[0].name;

    reader.readAsDataURL(event.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      this.imageUrl2 = event.target.result;
    };
  }

  Registerform = new FormGroup({
    blogName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    blogBody: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  Editform = new FormGroup({
    blogNameOnEdit: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    blogBodyeOnEdit: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  OnSubmit() {
    let form = new FormData();
    form.append('BlogName', this.Registerform.value.blogName);
    form.append('BlogBody', this.Registerform.value.blogBody);
    form.append('CategoryId', this.selected);
    form.append('file', this.selectedFile);
    this.blogService.addBlog(form).subscribe((a) => {
      this.getBlogs();
    });
    this.showBlog = !this.showBlog;
  }
  OnSubmitEdit() {
    console.log(this.blogId);
    let form = new FormData();
    form.append('BlogName', this.Editform.value.blogNameOnEdit);
    form.append('BlogBody', this.Editform.value.blogBodyeOnEdit);
    form.append('CategoryId', this.selectedOnEdit);
    form.append('file', this.selectedFile);
    this.blogService.editBlog(this.blogId, form).subscribe((a) => {
      this.getBlogs();
    });
  }

  getNotification() {
    this.commentList=[];
    this.adminService.getUnApprovedComment().subscribe((a) => {
      this.commentList = a;
      console.log(a);
    });
  }

  myFunction() {
    this.show = !this.show;
  }
  commentId: any;
  approveComment(item: any,reason:string) {
    console.log(reason)
    this.commentId = item.commentId;
    let params = {
      IsAppeoved: true,
      reason: reason,
    };
    this.adminService.approveComment(this.commentId, params).subscribe((a) => {
      // console.log(a);
      this.getNotification();
      location.reload()
    });
  }
  rijComment(item: any,reason:string){
    console.log(reason);
    this.commentId = item.commentId;
    let params = {
      IsAppeoved: false,
      reason: reason,
    };
    this.adminService.approveComment(this.commentId, params).subscribe((a) => {
      // console.log(a);
      this.getNotification();
      location.reload();
    });
  }
  logOut(){
    localStorage.clear();
  };
}
