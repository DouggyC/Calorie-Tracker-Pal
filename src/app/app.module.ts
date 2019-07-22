import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//
import { AppComponent } from './app.component';
// Services
import { MockDataService } from './services/mock-data.service';
import { SearchFoodService } from './services/search-food.service';

@NgModule({
  declarations: [AppComponent, RoutingComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MockDataService, SearchFoodService],
  bootstrap: [AppComponent]
})
export class AppModule {}
