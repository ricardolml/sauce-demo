import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorService } from './interceptors/interceptor.service';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
