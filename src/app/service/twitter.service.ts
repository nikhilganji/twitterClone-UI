import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Post } from '../classes/post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/do';

@Injectable()
export class TwitterService {
  baseUrl = `https://sheltered-badlands-67277.herokuapp.com/posts`;
  constructor(private http: HttpClient) {
  }


  getPosts(): Observable<Post[]> {
    const url = this.baseUrl;
    return this.http.get<Post[]>(url);
  }

  postTweet(post: Post): Observable<Post> {
    const url = this.baseUrl + '/add';
    return this.http.post(url, post).do(res => this.postSuccess(res)).pipe(
      catchError(this._errorHandler)
    );
  }

  postSuccess(res) {
    swal({
      type: 'success',
      title: 'Posted',
      html: 'Successfully posted by ' + res.title
    });
  }


  _errorHandler(err: HttpErrorResponse) {
    swal({
      title: 'Cannot make request',
      text: err.message,
      type: 'error',
      confirmButtonText: 'Ok',
      allowOutsideClick: true
    }).catch(swal.noop);
    return new ErrorObservable(
      `something is wrong: ${err.message}`
    );
  }


}
