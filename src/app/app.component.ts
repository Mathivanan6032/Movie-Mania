import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Welcome to the Movie Mania!';

  }


  /*data: any;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getData().subscribe(response => {
      this.data = response;
    });*/


