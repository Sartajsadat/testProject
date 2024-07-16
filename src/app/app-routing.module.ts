import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { ServicesComponent } from './components/services/services.component';

import { SettingComponent } from './components/setting/setting.component';
import { ReduxComponent } from './components/redux/redux.component';
import { PersianDateComponent } from './components/persian-date/persian-date.component';
import { ExportDataComponent } from './components/export-data/export-data.component';
import { MultiLanguageComponent } from './components/multi-language/multi-language.component';
import { OptionListComponent } from './components/option-list/option-list.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'services', component: ServicesComponent },

  {path:'option-list',component:OptionListComponent},
  { path: 'settings', component: SettingComponent },
  { path: 'settings/1', component: SettingComponent },
  { path: 'settings/2', component: SettingComponent },
  {path:'redux',component:ReduxComponent},
  { path: 'persian-date', component: PersianDateComponent },
  {path:'export-data',component:ExportDataComponent}, 
  {path:'multi-language',component:MultiLanguageComponent}, // Ensure this path is correct
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
