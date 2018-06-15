import {Component, OnInit} from '@angular/core';
import {Post} from '../classes/post';
import {TwitterService} from '../service/twitter.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home-twitter',
  templateUrl: './home-twitter.component.html',
  styleUrls: ['./home-twitter.component.css']
})
export class HomeTwitterComponent implements OnInit {
  posts: Post[];

  constructor(private tweetService: TwitterService) {
  }

  ngOnInit() {
    this.getTweets();
  }

  getTweets() {
    this.tweetService.getPosts().subscribe(post => {
      this.posts = post;
      error => this.reject(error);
    });
  }

  private reject(reason) {
    swal({
      title: 'Could not load data',
      text: reason,
      type: 'error',
      confirmButtonText: 'Ok',
      allowOutsideClick: true
    }).catch(swal.noop);
  }


}
