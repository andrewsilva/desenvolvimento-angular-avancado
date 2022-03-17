import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';

@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    HomeComponent,
    NotFoundComponent,
    MenuLoginComponent
  ],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [FooterComponent, HomeComponent, NotFoundComponent, MenuComponent],
})
export class NavegacaoModule {}
