import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'book/:id',
    loadChildren: () => import('./view-book/view-book.module').then( m => m.ViewBookPageModule)
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
