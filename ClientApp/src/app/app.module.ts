
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import * as Raven from 'raven-js'; 
import {ToastyModule} from 'ng2-toasty';

import { AppErrorHandler } from './error/app-error-handler';
import { AppComponent } from './app.component';
import { CounterComponent } from './core/counter/counter.component';
import { FetchDataComponent } from './core/fetch-data/fetch-data.component';
import { HomeComponent } from './core/home/home.component';
import { PaginationComponent } from './shared/pagination.component';
import { PhotoService } from './services/photo.service';
import { NavMenuComponent } from './core/nav-menu/nav-menu.component';
import { VehicleFormComponent } from './core/vehicle-form/vehicle-form.component';
import { VehicleService } from './services/vehicle.service';
import { VehiclesListComponent } from './core/vehicles-list/vehicles-list.component';
import { ViewVehicleComponent } from './core/view-vehicle/view-vehicle.component';

Raven.config('https://99f24dc509f145c1b7c93cec539f8cbb@sentry.io/275899').install();

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    VehicleFormComponent,
    VehiclesListComponent,
    PaginationComponent,
    ViewVehicleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    ToastyModule.forRoot(),
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
      { path: 'home', component: VehiclesListComponent },
      { path: 'vehicles/new', component: VehicleFormComponent},
      { path: 'vehicles/edit/:id', component: VehicleFormComponent },
      { path: 'vehicles/:id', component: ViewVehicleComponent },
      { path: 'vehicles', component: VehiclesListComponent},
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    VehicleService,
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
