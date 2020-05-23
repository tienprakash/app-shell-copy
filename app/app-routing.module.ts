import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellService } from './shell/services/shell.service';
import { AuthGuard } from './shell/guards/auth.guard';


const routes: Routes = [
  ShellService.childRoutes([
    {
      path: '', loadChildren: () =>
        import('./modules/dashboard/dashboard.module').then(dash => dash.DashboardModule),
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
