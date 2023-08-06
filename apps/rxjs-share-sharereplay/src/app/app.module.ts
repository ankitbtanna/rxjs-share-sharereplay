import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { Example1Component } from './Example1/example1.component';
import { Example2Component } from './Example2/example2.component';
import { Example3Component } from './Example3/example3.component';
import { Example4Component } from './Example4/example4.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
