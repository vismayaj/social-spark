import { RouterModule, Routes } from '@angular/router';
import { GeneratePostComponent } from './generate-post/generate-post.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'generate-post', component: GeneratePostComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }