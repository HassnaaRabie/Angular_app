import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAccountComponent } from './auth-account/auth-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { VerifyEmailAddressComponent } from './verify-email-address/verify-email-address.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth-account', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailAddressComponent },
  { path: 'auth-account', component: AuthAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
