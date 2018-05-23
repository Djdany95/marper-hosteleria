import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { AdminComponent } from './admin/admin.component';
import { ProductosService } from './services/productos.service';
import { ContactoService } from './services/contacto.service';
import { AdminService } from './services/admin.service';
import { PortadaComponent } from './portada/portada.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { FooterSmComponent } from './footer-sm/footer-sm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    DestacadosComponent,
    CatalogoComponent,
    ContactoComponent,
    AboutComponent,
    BannerComponent,
    AdminComponent,
    PortadaComponent,
    FooterSmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule.forRoot({
      thick: true,
      color: '#f1404b',
      spinnerPosition: 'left'
    }),
    NgProgressHttpModule
  ],
  providers: [HttpClient, ProductosService, ContactoService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule {}
