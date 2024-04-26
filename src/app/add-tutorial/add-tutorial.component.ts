import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../../Service/backend-service.service';
import { TutorialModel } from '../../Model/TutorialModel';

@Component({
  selector: 'app-add-tutorial',                       // to access this component in the html file
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.css',
})
export class AddTutorialComponent {

    tuto: TutorialModel = {                           // each variable receives a value from the user and makes it into a single object of type TutorialModel
    id : 0,                                           // so that we can access it as a whole
    title: '',
    director: '',
    genre: '',
    publishedYear: 0

  };


  constructor(private backendService: BackendServiceService) {}

  ngOnInit(): void {}

  onSubmit() {                                         // this onsubmit method invokes whent the button of submit type is clicked by the user in the form
    this.backendService.postTutorial(this.tuto).subscribe((response) => {
      console.log(response);
    });

    // Here, you can access formData and perform actions like sending it to the server
    // the onSubmit() method invokes when we click the submit button in the user interface

    this.resetForm();
  }

  resetForm() {
    // Reset form data after submission
    this.tuto = {
      id: 0,
      title: '',
      director: '',
      genre: '',
      publishedYear: 0,
    };
  }
}
