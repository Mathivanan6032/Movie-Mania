import { Component, OnInit} from '@angular/core';
import { BackendServiceService } from '../../Service/backend-service.service';
import { TutorialModel } from '../../Model/TutorialModel';




@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css',
})
export class TutorialsComponent implements OnInit {
  tutorials?: TutorialModel[]; // ? in tutorials? represents the optional value.
  searchedTerm: String = '';
  id = 0;

  constructor(
    private backendService: BackendServiceService
  ) {}

  ngOnInit(): void {
    // all the methods to be executed should be declared under the ngOnInit
    this.getAllTutorials();
    //this.getTutorials();
    //this.postTutorial();
    //this.deleteTutorial();
  }

  getAllTutorials(): void {
    this.backendService
      .getAllTutorials()
      .subscribe((data: TutorialModel[] | undefined) => {
        this.tutorials = data;
      });
  }

  getTutorials(): void {
    this.backendService
      .getTutorials(this.searchedTerm)
      .subscribe((data: TutorialModel[] | undefined) => {
        this.tutorials = data;
      });

    console.log(this.searchedTerm);
  }



  deleteTutorialById(): void {
    this.backendService.deleteTutorialById(this.id).subscribe((response) => {
      console.log(response);
    });

    this.getAllTutorials();
  }
}
