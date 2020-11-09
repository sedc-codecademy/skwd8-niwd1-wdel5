import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AliveService } from './services/alive.service';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminPanelService } from './services/admin-panel.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MapMunicipalityPipe } from './pipes/map-municipality.pipe';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { MapMealTypePipe } from './pipes/map-mealType.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPanelComponent,
    HeaderComponent,
    FooterComponent,
    MapMunicipalityPipe,
    MapMealTypePipe,
    RestaurantDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    AliveService,
    AdminPanelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
