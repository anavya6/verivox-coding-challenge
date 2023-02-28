import { NotFoundComponent } from './page/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './page/results/results.component';

const routes: Routes = [{
  path: "", component: ResultsComponent
},
{
  path: "results", component: ResultsComponent
},
{
  path: "**", component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
