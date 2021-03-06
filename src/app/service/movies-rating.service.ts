import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesRatingService {

  constructor(private httpClient: HttpClient) {
  }

  movieRatingPost(rating: number, id: number) {
    return this.httpClient.post("https://api.themoviedb.org/3/movie/" + id + "/rating", rating)
  }
}
