import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'assignment',
    component:AssignmentComponent
  },
  {
    path:'pipes',
    component:PipesComponent
  },
  {
    path:'templatedrivenforms',
    component:TemplateDrivenFormsComponent
  },
  {
    path:'reactiveform',
    component:ReactiveFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
