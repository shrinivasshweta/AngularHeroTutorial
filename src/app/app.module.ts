/* For apps that run in the browser, 
import BrowserModule in the root AppModule because it provides services that are essential to launch and run a browser app.
BrowserModule imports CommonModule, which contributes many common directives such as ngIf and ngFor. 
Additionally, BrowserModule re-exports CommonModule making all of its directives available to any module that imports BrowserModule.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }