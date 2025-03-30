import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.css'
})
export class NewsFeedComponent implements OnInit {

  newsList: any[] = [];

  constructor(private newsService: NewsService) { }


  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getNews().subscribe(
      (data)=> {
      this.newsList = data.articles;
    },
    (error) => {
      console.error('Error fetching news:', error);
    }
  );
  }

}
