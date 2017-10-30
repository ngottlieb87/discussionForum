import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AllSubsComponent } from './all-subs/all-subs.component';
import { GamingComponent } from './gaming/gaming.component';
import { WoodWorkComponent } from './wood-work/wood-work.component';
import { CookingComponent } from './cooking/cooking.component';
import { HikingComponent } from './hiking/hiking.component';

@NgModule({
  declarations: [
    AppComponent,
    AllSubsComponent,
    GamingComponent,
    WoodWorkComponent,
    CookingComponent,
    HikingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
