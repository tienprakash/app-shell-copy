import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ShellComponent } from './shell.component';
import { ShellService } from './services/shell.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    ShellComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    ShellService,
  ],
})
export class ShellModule { }
