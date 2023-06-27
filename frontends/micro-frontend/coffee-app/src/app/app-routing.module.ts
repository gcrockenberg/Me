import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';  //created by create-single-spa 

// const routes: Routes = [
//   { path: '**', component: EmptyRouteComponent }
// ];

@NgModule({
  declarations: [EmptyRouteComponent],  // Added when testing nav bar layout
  imports: [RouterModule.forRoot([{ path: '**', component: EmptyRouteComponent }])],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule]
})

export class AppRoutingModule { } 
