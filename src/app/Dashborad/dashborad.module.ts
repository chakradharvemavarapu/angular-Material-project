import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradRoutingModule } from './dashborad-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    SidenavComponent,
    HomeComponent,
    FooterComponent],
  imports: [
    CommonModule,
    DashboradRoutingModule,
    MaterialModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class DashboradModule { }
