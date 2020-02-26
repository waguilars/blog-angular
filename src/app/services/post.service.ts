import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { api } from "./apiconfig";
import { Post } from "../models/post";

@Injectable()
export class PostService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = api.url;
  }

  create(token: string, post: Post): Observable<any> {
    let json = JSON.stringify(post);
    let params = "json=" + json;
    let headers = new HttpHeaders()
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Authorization", token);

    return this._http.post(this.url + "post", params, { headers });
  }

  getPosts(): Observable<any> {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    return this._http.get(this.url + "post", { headers });
  }
}
