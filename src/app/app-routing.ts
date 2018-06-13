import {Routes} from '@angular/router';
import {HomeTwitterComponent} from './home-twitter/home-twitter.component';
import {PostComponent} from './post/post.component';



export const AppRoutes: Routes = [
  {
    path: '',
    component:HomeTwitterComponent
  },
  {
  path: 'home',
  component: HomeTwitterComponent
}, {
  path:'post',
  component: PostComponent
},{
  path: '**',
  redirectTo: 'error/404'
}];
