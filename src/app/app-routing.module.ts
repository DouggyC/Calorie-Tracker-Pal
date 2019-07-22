import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ListComponent } from './components/list/list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MacrosComponent } from './components/macros/macros.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const RoutingComponent = [
  HeaderComponent,
  SearchComponent,
  MainLayoutComponent,
  ListComponent,
  ProfileComponent,
  MacrosComponent
];
