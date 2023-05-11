import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ValidationPipe } from '../shared/pipe/validation.pipe';
import { FullnamePipe } from '../shared/pipe/fullname.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    InitialPageComponent,
    RegisterComponent,
    ValidationPipe,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatMenuModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    InitialPageComponent,
    LoginComponent,
  ],
})
export class CoreModule {}
