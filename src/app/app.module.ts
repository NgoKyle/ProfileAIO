import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { ProfileaioComponent } from './modules/profileaio/profileaio.component';
import { ProfileService } from './core/services/profile.service';
import { ProfileComponent } from './modules/profile/profile.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AuthGuardService } from './core/route-guard/auth-guard.service';
import { ProxyService } from './core/services/proxy.service';
import { ProxyDashboardComponent } from './modules/proxy/proxy-dashboard/proxy-dashboard.component';
import { ProxyFormComponent } from './modules/proxy/proxy-form/proxy-form.component';
import { ProxyMenuComponent } from './modules/proxy/proxy-menu/proxy-menu.component';
import { UserService } from './core/services/user.service';
import { CallbackComponent } from './shared/callback/callback.component';
import { AuthService } from './core/services/auth.service';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { RaffleComponent } from './modules/raffle/raffle.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileaioComponent,
    CallbackComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    ProxyDashboardComponent,
    ProxyFormComponent,
    ProxyMenuComponent,
    RaffleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProfileService,
    ProxyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
