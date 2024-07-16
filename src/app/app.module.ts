import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReduxComponent } from './components/redux/redux.component';
import { OptionListComponent } from './components/option-list/option-list.component';
import { reduxReducer } from './store/redux/redux.reducer';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OptionListComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    StoreModule.forRoot({ redux: reduxReducer }),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }