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
  posts: Post[] =[];
  upperLimit:number =10; /* Page initially loads 10 posts */
  dataLength: number;

  constructor(private tweetService: TwitterService) {
  }

  ngOnInit() {
    this.getTweets();
  }

  getTweets() {
    this.tweetService.getPosts().subscribe(post => {
      if(this.upperLimit>post.length-1) {
        this.dataLength = post.length-1;
        this.upperLimit= post.length-1;
      }
      /* Reversing the collection inorder to fetch recent data first */
      this.posts = post.reverse().slice(0, this.upperLimit);
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

  onScroll() {
    if(!this.dataLength){
    this.upperLimit+=2; /* Adding 2 new posts per every defined scroll action */
    this.getTweets();
    }
  }
}