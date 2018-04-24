
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, XHRBackend } from '@angular/http';
import { RouterModule } from '@angular/router';

import * as Raven from 'raven-js'; 
import {ToastyModule} from 'ng2-toasty';

import { AppErrorHandler } from './error/app-error-handler';
import { AppComponent } from './app.component';
import { PaginationComponent } from './shared/pagination.component';
import { PhotoService } from './services/photo.service';
import { NavMenuComponent } from './core/nav-menu/nav-menu.component';
import { VehicleFormComponent } from './core/vehicle-form/vehicle-form.component';
import { VehicleService } from './services/vehicle.service';
import { VehiclesListComponent } from './core/vehicles-list/vehicles-list.component';
import { ViewVehicleComponent } from './core/view-vehicle/view-vehicle.component';
import { AlertModule, TabsModule } from 'ngx-bootstrap';
import { ProgressService, BrowserXhrWithProgress } from './services/progress.service';
import { BrowserXhr } from '@angular/http';
import { RegistrationFormComponent } from './core/registration-form/registration-form.component';
import { UserService } from './services/user.service';
import { AuthenticateXHRBackend } from './services/authenticate-xhrbackend.service';
import { ConfigService } from './shared/utils/config.service';
import { AuthGuard } from './services/auth-guard.service';
import { LoginFormComponent } from './core/login-form/login-form.component';
import { HeaderComponent } from './core/header/header.component';

Raven.config('https://99f24dc509f145c1b7c93cec539f8cbb@sentry.io/275899').install();

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    VehicleFormComponent,
    VehiclesListComponent,
    PaginationComponent,
    ViewVehicleComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    ToastyModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    HttpClientModule,
    HttpModule,
    FormsModule,
    //!!!!to do: to be modularized 
    RouterModule.forRoot([
      { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
      { path: 'home', component: VehiclesListComponent },
      { path: 'vehicles/new', component: VehicleFormComponent, canActivate:[AuthGuard]},
      { path: 'vehicles/edit/:id', component: VehicleFormComponent },
      { path: 'vehicles/:id', component: ViewVehicleComponent },
      { path: 'vehicles', component: VehiclesListComponent},
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegistrationFormComponent},
      { path: '**', redirectTo: 'vehicles' }
    ])
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: BrowserXhr, useClass: BrowserXhrWithProgress },
    UserService,
    AuthGuard,
    VehicleService,
    PhotoService,
    ProgressService,
    ConfigService, { 
      provide: XHRBackend, 
      useClass: AuthenticateXHRBackend
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
