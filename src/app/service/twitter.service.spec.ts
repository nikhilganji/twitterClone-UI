import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TwitterService } from './twitter.service';
import { Post } from '../classes/post';
describe('TwitterService', () => {

  let service: TwitterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TwitterService]
    });

    service = TestBed.get(TwitterService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should retrieve posts from the API via GET request', () => {
    const dummyPosts: Post[] = [
      { _id: '1', body: 'Hellothere', title: 'title1' },
      { _id: '2', body: 'Hellothere', title: 'title2' },
      { _id: '3', body: 'Hellothere', title: 'title3' }
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(3);
      expect(posts).toEqual(dummyPosts);
    });

    const req = httpMock
      .expectOne(req => req.method === 'GET' && req.url === `https://sheltered-badlands-67277.herokuapp.com/posts`);
    req.flush(dummyPosts);
  });

  it('should successfully post data via POST request', () => {
    const PostRequestRes: Post = { _id: '1', body: 'Hellothere', title: 'title' };

    service.postTweet(PostRequestRes).subscribe(post => {
      expect(typeof post).toEqual('object');
      expect(post).toEqual(PostRequestRes);
    });

    const request = httpMock
      .expectOne(request => request.method === 'POST' && request.url === `https://sheltered-badlands-67277.herokuapp.com/posts/add`);
    request.flush(PostRequestRes);
  });
});
