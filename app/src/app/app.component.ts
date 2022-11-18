import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  quote: Quote = { id: 0, quote: '', author: '' };

  interval = 1000;

  timeoutMax = 5 * 1000;

  timeoutMs = this.timeoutMax;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    setInterval(() => {
      if (this.timeoutMs === 0) {
        this.timeoutMs = this.timeoutMax;
        this.loadQuote();
      } else {
        this.timeoutMs -= this.interval;
      }
    }, this.interval);
  }

  loadQuote() {
    // Both URLs should yield equal results.
    // If you want a demo of what the app should display just use exampleUrl.

    const exampleUrl = 'https://dummyjson.com/quotes/random';

    const serviceUrl = 'http://localhost:8080/quotes/random';

    this.http
      .get<Quote>(serviceUrl)
      .pipe(
        first(),
        map((quote) => {
          this.quote = quote;
        }),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          this.quote = {
            id: 0,
            quote: `Error: ${error.statusText}`,
            author: '',
          };
          return of([]);
        })
      )
      .subscribe();
  }
}

interface Quote {
  id: number;
  author: string;
  quote: string;
}
