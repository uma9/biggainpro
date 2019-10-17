import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ComponentMessages } from '@progress/kendo-angular-l10n';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import {  
  AgmCoreModule  
} from '@agm/core'; 
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadModule } from '@progress/kendo-angular-upload';
import { AddpostformComponent } from './addpostform/addpostform.component';





@NgModule({
  declarations: [
    AppComponent,
    AddpostformComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserModule,
    
    BrowserAnimationsModule,  
    FormsModule,
    
    ReactiveFormsModule,
    MaterialModule,
    ScrollingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,MatBadgeModule,
    MultiSelectAllModule,
    MultiSelectModule,
    ButtonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({  
      apiKey: 'Your Google Api Key'  }),
    UploadModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
