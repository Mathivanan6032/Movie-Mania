import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';                     // formsmodule - to receive data from the users
import { HttpClientModule } from '@angular/common/http';          // httpclientmodule - to connect with the backend server


import { AppComponent } from './app.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';


// the components that we will create will be automatically imported here.

@NgModule({                   // declaring object literal inside the NgModule
  declarations: [             // property-- key: value pairs.   // contains all the declarations of components
    AppComponent, TutorialsComponent, AddTutorialComponent           // while creating the components, the components automatically gets declared here.
  ],
  imports: [                  // imports - key containsarray of values.    // contains all the imports - need to be imported manually.
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]     // bootstrap - decides where the program will start
})

//@NgModule(object_literal)
export class AppModule { }
