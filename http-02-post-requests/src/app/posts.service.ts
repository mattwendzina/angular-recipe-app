import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from "@angular/common/http";
import { Post } from "./post.model";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  getPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("print", "pretty");
    searchParams = searchParams.append("custom", "1");
    return this.http
      .get<{ [key: string]: Post }>(
        "https://angular-practice-d6ea6.firebaseio.com/posts.json",
        {
          headers: new HttpHeaders({ "Custom-Header": "Hello" }),
          params: searchParams,
        }
      )
      .pipe(
        map((res) => {
          const postsArray: Post[] = [];
          for (let key in res) {
            if (res.hasOwnProperty(key)) {
              postsArray.push({ ...res[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        "https://angular-practice-d6ea6.firebaseio.com/posts.json",
        postData,
        {
          observe: "response",
        }
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          this.error.next(error.error.error);
        }
      );
  }

  deletePosts() {
    return this.http
      .delete<void>(
        "https://angular-practice-d6ea6.firebaseio.com/posts.json",
        {
          observe: "events",
          responseType: "json",
        }
      )
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Sent) {
            console.log("event.type: ", event.type);
          }
          if (event.type === HttpEventType.Response) {
            console.log("event.body: ", event);
          }
        })
      );
  }
}
