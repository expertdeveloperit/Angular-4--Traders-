import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import {CookieService} from 'ngx-cookie-service';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { ContainerComponent } from './container/container.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {LoginserviceService} from './loginservice.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BuildersComponent} from './builders/builders.component';
import {NewbuilderComponent} from './newbuilder/newbuilder.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

<<<<<<< HEAD
//Builder module
import { BuilderDasboardComponent } from './BuilderModule/builder-dasboard/builder-dasboard.component';
import { BuilderSidebarComponent } from './BuilderModule/builder-sidebar/builder-sidebar.component';
import { BuilderHeaderComponent } from './BuilderModule/builder-header/builder-header.component';
import { BuilderContainerComponent } from './BuilderModule/builder-container/builder-container.component';
import { PatnershipComponent } from './BuilderModule/patnership/patnership.component';
import { PaymentComponent } from './BuilderModule/payment/payment.component';
import { ReportingComponent } from './BuilderModule/reporting/reporting.component';
import { PatnershipOverviewComponent } from './BuilderModule/patnership-overview/patnership-overview.component';
import { UpdatePatnershipComponent } from './BuilderModule/update-patnership/update-patnership.component';
import { NewPatnershipComponent } from './BuilderModule/new-patnership/new-patnership.component';
import { PatnershipStatusComponent } from './BuilderModule/patnership-status/patnership-status.component';

=======
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    ForgotPasswordComponent,
    SignupComponent,
    ContainerComponent,
    ContentHeaderComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    BuildersComponent,
<<<<<<< HEAD
    NewbuilderComponent,
    ChangePasswordComponent
=======
<<<<<<< HEAD
    NewbuilderComponent,
    BuilderDasboardComponent,
    BuilderSidebarComponent,
    BuilderHeaderComponent,
    BuilderContainerComponent,
    PatnershipComponent,
    PaymentComponent,
    ReportingComponent,
    PatnershipOverviewComponent,
    UpdatePatnershipComponent,
    NewPatnershipComponent,
    PatnershipStatusComponent
=======
    NewbuilderComponent
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
  ],
  providers: [CookieService,LoginserviceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
