import {Component, OnInit} from '@angular/core';
import {Post} from '../classes/post';
import swal from 'sweetalert2';
import {TwitterService} from '../service/twitter.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  username: string;
  content: string;
  posts: Post[] = [];
  form: FormGroup;

  constructor(private tweetService: TwitterService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      content: new FormControl('',
        [Validators.required, Validators.minLength(10), Validators.maxLength(140)])   });
  }

  submitForm() {
    this.submit(this.form.value.username, this.form.value.content);
  }

  submit(username, content) {
    let post = new Post();
    post.body = content;
    post.title = username;
    this.posts.push(post);
    this.tweetService.postTweet(post).subscribe(res => console.log(res));
  }

}
