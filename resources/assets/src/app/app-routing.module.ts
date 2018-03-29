import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import {ContainerComponent} from './container/container.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BuildersComponent} from './builders/builders.component';
import {NewbuilderComponent} from './newbuilder/newbuilder.component';
<<<<<<< HEAD
import { ChangePasswordComponent } from './change-password/change-password.component';
=======
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
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
const routes: Routes = [
  // { path: 'login', loadChildren: './auth/login/login.module#LoginModule' },
  // { path: 'forgot', loadChildren: './auth/forgot/forgot.module#ForgotModule' },
  // { path: 'reset', loadChildren: './auth/reset/reset.module#ResetModule' },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent },
  {path:'', redirectTo:'form', pathMatch:'full'},
  {path:'form', component:LoginComponent,
    children:[
      {path:'',redirectTo:'login', pathMatch:'full'},
      {path:'login', component:LoginFormComponent},
      {path:'forgotPassowrd', component:ForgotPasswordComponent},
      {path:'signup', component:SignupComponent},
      {path:'changePassword/:token', component:ChangePasswordComponent}
    ]
  },
  {path:'dashboard', component:ContainerComponent,children:[
    {path:'', component:DashboardComponent},
    {path:'builders', component:BuildersComponent},
<<<<<<< HEAD
    {path: 'newbuilder', component:NewbuilderComponent},
  ]},
  //builder routes
  {path:'builderdashboard', component:BuilderContainerComponent,children:[
    {path:'',component:BuilderDasboardComponent},
    {path:"patnership",component:PatnershipComponent, children:[
      {path:"overview",component:PatnershipOverviewComponent},
      {path:"newpatnership",component:NewPatnershipComponent},
      {path:"update",component:UpdatePatnershipComponent},
      {path:"status",component:PatnershipStatusComponent},
    ]},
    {path:"payment",component:PaymentComponent},
    {path:"reporting",component:ReportingComponent}
  ]}
=======
    {path: 'newbuilder', component:NewbuilderComponent}
  ]},


>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/