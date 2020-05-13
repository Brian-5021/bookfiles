// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/es';

// declaración de idioma
registerLocaleData(locales);


// rutas
import { AppRoutingModule } from './app-routing.module';



// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { LibroComponent } from './components/libro/libro.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './shared/loading/loading.component';
import { ChangeTextPipe } from './pipes/change-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    LibroComponent,
    NoimagePipe,
    LoadingComponent,
    ChangeTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
    useValue: 'Es'
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
