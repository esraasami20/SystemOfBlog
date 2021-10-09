export interface UserData {
  fname:string;
  lname:string;
  password:string;
  address:string;
  userName: string;
  email: string;
  role: string;
  message?: any;
  token: string;
  isAuthenticated: boolean;
  expireDate: Date;
}

export interface registerUser {
  fname: string;
  lname: string;
  password: string;
  address: string;
  email: string;
}


export interface Category {
  categoryId: number;
  categoryName: string;
  blogs: any[];
}

export interface Blog {
  blogId: number;
  blogName: string;
  blogBody: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
  category: Category;
  comments: Comment[];
}


export interface State {
  isApproved: boolean;
}

export interface Comment {
  commentId: number;
  commentBody: string;
  isAppeoved: boolean;
  createdAt: Date;
  blogId: number;
  category: Blog;
  vistorId: string;
  vistor:UserData;
}



