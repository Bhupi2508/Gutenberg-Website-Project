import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventureComponent } from './components/adventure/adventure.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DramaComponent } from './components/drama/drama.component';
import { FictionComponent } from './components/fiction/fiction.component';
import { HistoryComponent } from './components/history/history.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';
import { PoliticsComponent } from './components/politics/politics.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'adventure',
  component: AdventureComponent
}, {
  path: 'drama',
  component: DramaComponent
},
{
  path: 'fiction',
  component: FictionComponent
},
{
  path: 'history',
  component: HistoryComponent
},
{
  path: 'philosophy',
  component: PhilosophyComponent
},
{
  path: 'politics',
  component: PoliticsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
