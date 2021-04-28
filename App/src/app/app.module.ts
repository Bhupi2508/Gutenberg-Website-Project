import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FictionComponent } from './components/fiction/fiction.component';
import { DramaComponent } from './components/drama/drama.component';
import { HumourComponent } from './components/humour/humour.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { HistoryComponent } from './components/history/history.component';
import { AdventureComponent } from './components/adventure/adventure.component';

@NgModule({
  declarations: [
    AppComponent,
    FictionComponent,
    DramaComponent,
    HumourComponent,
    PoliticsComponent,
    PhilosophyComponent,
    HistoryComponent,
    AdventureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
