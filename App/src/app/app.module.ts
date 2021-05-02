import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { DxSelectBoxModule, DxListModule, DxTemplateModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FictionComponent } from './components/fiction/fiction.component';
import { DramaComponent } from './components/drama/drama.component';
import { HumourComponent } from './components/humour/humour.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { HistoryComponent } from './components/history/history.component';
import { AdventureComponent } from './components/adventure/adventure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FictionComponent,
    DramaComponent,
    HumourComponent,
    PoliticsComponent,
    PhilosophyComponent,
    HistoryComponent,
    AdventureComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    DxSelectBoxModule,
    DxListModule,
    DxTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
